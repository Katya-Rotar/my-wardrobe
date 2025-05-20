'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CreateOutfitForm({ userId }) {
  const [formData, setFormData] = useState({
    userID: userId,
    temperatureSuitabilityID: 1,
    tagIDs: [],
    styleIDs: [],
    seasonIDs: [],
    clothingItemIDs: [],
    outfitGroupIDs: [],
  });

  const [styles, setStyles] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [temps, setTemps] = useState([]);
  const [tags, setTags] = useState([]);
  const [clothingItems, setClothingItems] = useState([]);
  const [outfitGroups, setOutfitGroups] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [tagRes, styleRes, seasonRes, tempRes, clothingRes, groupRes] = await Promise.all([
          axios.get('http://localhost:5000/api/Tag'),
          axios.get('http://localhost:5000/api/Style'),
          axios.get('http://localhost:5000/api/Season'),
          axios.get('http://localhost:5000/api/TemperatureSuitability'),
          axios.get('http://localhost:5000/api/ClothingItem?UserId=1')
        ]);

        setTags(tagRes.data);
        setStyles(styleRes.data);
        setSeasons(seasonRes.data);
        setTemps(tempRes.data);
        setClothingItems(clothingRes.data);
      } catch (error) {
        console.error("Failed to fetch reference data:", error);
      }
    }

    fetchData();
  }, []);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleMultiSelectChange = (field, options) => {
    const values = Array.from(options).map(option => parseInt(option.value));
    setFormData(prev => ({
      ...prev,
      [field]: values,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/Outfit', formData);
      alert('Аутфіт успішно створено!');
      console.log('Created:', res.data);
    } catch (err) {
      console.error(err);
      alert('Помилка при створенні аутфіту.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Створити аутфіт</h2>

      <label>Температурна відповідність:</label>
      <select
        value={formData.temperatureSuitabilityID}
        onChange={e => handleChange('temperatureSuitabilityID', parseInt(e.target.value))}
      >
        {temps.map(temp => (
          <option key={temp.id} value={temp.id}>
            {temp.temperatureSuitabilityName}
          </option>
        ))}
      </select>

      <label>Теги:</label>
      <select
        multiple
        value={formData.tagIDs.map(id => id.toString())}
        onChange={e => handleMultiSelectChange('tagIDs', e.target.selectedOptions)}
      >
        {tags.map(tag => (
          <option key={tag.id} value={tag.id}>
            {tag.tagName}
          </option>
        ))}
      </select>

      <label>Стилі:</label>
      <select
        multiple
        value={formData.styleIDs.map(id => id.toString())}
        onChange={e => handleMultiSelectChange('styleIDs', e.target.selectedOptions)}
      >
        {styles.map(style => (
          <option key={style.id} value={style.id}>
            {style.styleName}
          </option>
        ))}
      </select>

      <label>Сезони:</label>
      <select
        multiple
        value={formData.seasonIDs.map(id => id.toString())}
        onChange={e => handleMultiSelectChange('seasonIDs', e.target.selectedOptions)}
      >
        {seasons.map(season => (
          <option key={season.id} value={season.id}>
            {season.seasonName}
          </option>
        ))}
      </select>

      <label>Елементи одягу:</label>
      <select
        multiple
        value={formData.clothingItemIDs.map(id => id.toString())}
        onChange={e => handleMultiSelectChange('clothingItemIDs', e.target.selectedOptions)}
      >
        {clothingItems.map(item => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      <br />
      <button type="submit">Створити</button>
    </form>
  );
}

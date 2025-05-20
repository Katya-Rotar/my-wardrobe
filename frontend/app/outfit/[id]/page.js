'use client';

import ItemCard from "../../components/wardrobe/itemCard";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import api from '../../../api/api';

const OutfitDetailsPage = () => {
    const { id } = useParams(); // отримуємо id з URL
    const [outfit, setOutfit] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchOutfit() {
            setLoading(true);
            try {
                const response = await api.get(`/outfit/${id}`); // ← використовуємо api
                setOutfit(response.data); // ← дані в response.data
            } catch (error) {
                console.error('Failed to load outfit details:', error);
            } finally {
                setLoading(false);
            }
        }

        if (id) {
            fetchOutfit();
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!outfit) return <p>Outfit not found.</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>Outfit Details</h1>

            <p><strong>Temperature suitability:</strong> {outfit.temperatureSuitabilityName}</p>
            <p><strong>Styles:</strong> {outfit.styleNames.join(', ')}</p>
            <p><strong>Seasons:</strong> {outfit.seasonNames.join(', ')}</p>
            <p><strong>Tags:</strong> {outfit.tags.join(', ')}</p>
            <p><strong>Groups:</strong> {outfit.groupNames.join(', ')}</p>

            <h2>Items:</h2>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {outfit.itemNames.map(item => (
                    <ItemCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.imageURL}
                    />
                ))}
            </div>
        </div>
    );
};

export default OutfitDetailsPage;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Surah.css';
import { Surah as SurahType } from './types';

const convertToArabicNumerals = (num: number): string => {
    const arabicNumerals = '٠١٢٣٤٥٦٧٨٩'; // Arabic-Indic numerals
    return num.toString().split('').map(digit => arabicNumerals[parseInt(digit)]).join('');
};

interface SurahProps {
    surahs: SurahType[];
}

const Surah: React.FC<SurahProps> = ({ surahs }) => {
    const { surahId } = useParams<{ surahId: string }>();
    const surah = surahs.find(s => s.id === parseInt(surahId || '', 10));
    const [selectedVerse, setSelectedVerse] = useState<{ id: number; text: string; translation: string ;suna :string;shia:string} | null>(null);

    if (!surah) {
        return <p>Surah not found</p>;
    }

    const handleVerseClick = (verseId: number) => {
        const verse = surah.verses.find(v => v.id === verseId);
        if (verse) {
            setSelectedVerse({ id: verse.id, text: verse.text, translation: verse.translation,suna:verse.suna ,shia:verse.shia});
        }
        
    };

    return (
        <div className="surah-container">
            <div className="main-content">
                <h2>{surah.name} ({surah.transliteration})</h2>
                <div className="verse-container">
                    {surah.verses.map(verse => (
                        <span 
                            key={verse.id} 
                            className="verse" 
                            onClick={() => handleVerseClick(verse.id)}
                        >
                            {verse.text}
                            <span className="verse-number">{` (${convertToArabicNumerals(verse.id)})`}</span>
                        </span>
                    ))}
                </div>
            </div>
            <div className="sidebar">
                {selectedVerse ? (
                    <div>
                        <div className="verse-details">
                            <p className='amo'>{selectedVerse.text}</p>
                           <div>
                            <p className='l'><strong>Translation:</strong> {selectedVerse.translation}</p>
                        </div>
                        </div>
                        <div className="verse-details">
                            <h3>Sunnah:</h3>
                            <p className='amo'>{selectedVerse.suna}</p>
                        </div>
                        <div className="verse-details">
                            <h3>Shia:</h3>
                            <p className='amo'> {selectedVerse.shia}</p>
                        </div>
                    </div>
                ) : (
                    <p>Select an Ayah to view details</p>
                )}
            </div>
        </div>
    );
};

export default Surah;

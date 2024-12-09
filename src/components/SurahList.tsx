import React from 'react';
import { Surah as SurahType } from './types';
import './SurahList.css';
import { Link } from 'react-router-dom';

interface SurahListProps {
    surahs: SurahType[];
}

const SurahList: React.FC<SurahListProps> = ({ surahs }) => {
    return (
        <div>
            <h1>القرآن الكريم</h1>
            <ul className="surah-list">
                {surahs.map(surah => (
                    <li key={surah.id} className="surah-item">
                 <Link to={`/surah/${surah.id}`}>{surah.name} ({surah.transliteration})
                <h2>{surah.name}</h2>
                    <p>{surah.transliteration}</p >
                </Link>
                      
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SurahList;

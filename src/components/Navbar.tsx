import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Ensure this path is correct

interface NavbarProps {
    surahs: { id: number; name: string; transliteration: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ surahs }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Handle search input change
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    // Handle search result selection
    const handleSurahSelect = (id: number) => {
        navigate(`/surah/${id}`);
        setSearchTerm("")
    };

    // Filter surahs based on search term
    const filteredSurahs = surahs.filter(surah =>
        surah.name.toLowerCase().includes(searchTerm) ||
        surah.transliteration.toLowerCase().includes(searchTerm)
    );

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <Link to="/" className="navbar-brand">QuranHub</Link>
                <div className="navbar-menu">
                    <input
                        type="text"
                        placeholder="Search Surahs..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="navbar-search"
                    />
                    {searchTerm && (
                        <ul className="navbar-results">
                            {filteredSurahs.length ? (
                                filteredSurahs.map(surah => (
                                    <li
                                        key={surah.id}
                                        onClick={() => handleSurahSelect(surah.id)}
                                        className="navbar-result-item"
                                    >
                                        {surah.name} ({surah.transliteration})
                                    </li>
                                ))
                            ) : (
                                <li className="navbar-result-item">No surahs found</li>
                            )}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

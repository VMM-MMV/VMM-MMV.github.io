import React, { useState } from 'react';
import axios from 'axios';

function Languages() {
    const [langauge, setLanguage] = useState('');
    const [levelLanguage, setLevelLanguage] = useState('');  

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!langauge || !levelLanguage) {
            alert('Please fill out all fields.');
            return;
        }
        
        try {
            await axios.post('http://localhost:8080/addPerson', {langauge, levelLanguage});
            alert('Person added successfully!');
            setLanguage('');
            setLevelLanguage('');
        } catch (error) {
            alert('Error adding person: ' + error);
        }
    }

    return (
        <div id="parent">
            <div className="aside-right">
                <div className="container">
                    <div className="main-page">
                        <div className="space"> 
                            <h1 className="page-title">Tell us about your languages!</h1>
                            <h2 className="sub-title">Type all your spoken languages from the native one to just new learnt.</h2>
                            <div className="form5">
                                <form onSubmit={handleSubmit}>
                                    <div className="language-full-fields">
                                        <div className="language-field">
                                            <label>
                                                Languages:
                                            </label>
                                            <input type="text" placeholder="e.g English" className="form-name" autoComplete="langauge" value={langauge} onChange={e => setLanguage(e.target.value)}/>
                                        </div>
                                        <div className="level-language-field">
                                            <label>
                                                Level:
                                            </label>
                                            <select className="form-name" value={levelLanguage} onChange={e => setLevelLanguage(e.target.value)}>
                                                <option value="">Select language level</option>
                                                <option value="A1">A1</option>
                                                <option value="A2">A2</option>
                                                <option value="B1">B1</option>
                                                <option value="B2">B2</option>
                                                <option value="C1">C1</option>
                                                <option value="C2">C2</option>
                                                <option value="nativeSpeaker">Native Speaker</option>
                                                <option value="workingKnowledge">Working Knowledge</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Languages
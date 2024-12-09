// types.ts
export interface Verse {
    id: number;
    text: string;
    translation: string;
    suna:string,
    shia:string
}

export interface Surah {
    id: number;
    name: string;
    transliteration: string;
    translation: string;
    type: string;
    total_verses: number;
    verses: Verse[];
}

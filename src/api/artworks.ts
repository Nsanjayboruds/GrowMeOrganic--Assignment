import type { Artwork } from "../types/artworks";

export interface ApiResponse{
    data: Artwork[];
    pagination: {
        total: number;
        limit: number;
        curent_page: number;
    };
}

export const fetchArtworks = async(page:number,limit=22)=>{
    const res =await fetch(
       ` https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`
    );
    return res.json() as Promise<ApiResponse>;
}
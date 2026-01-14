import { useEffect, useState } from 'react'
import type { Artwork } from '../types/artworks'
import { fetchArtworks } from '../api/artworks';
import SelectOverlay from './SelectOverlay';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


function ArtTable() {
    const[rows,setRows]=useState<Artwork[]>([]);
    const[page,setPage]=useState(0);
    const[total,setTotal]=useState(0);
    const[loading,setLoading]=useState(false);

    const [selectedIds,setSelectedIds]=useState<Set<number>>(new Set());
    const rowsPerPage=12;


    useEffect(()=>{
        loadPage(page + 1);
    },[page]);


    const loadPage=async(pageNumber:number)=>{
        setLoading (true);
        const res = await fetchArtworks(pageNumber,rowsPerPage);
        setRows(res.data);
        setTotal (res.pagination.total);
        setLoading(false);
    };

    const onPage=(e:{first:number})=>{
        setPage(Math.floor(e.first / rowsPerPage));
    };

    const selectedRows= rows.filter(r=> selectedIds.has(r.id));
    const onSelectionChange =(e:{value:Artwork[]})=>{
        const newSet = new Set(selectedIds);

        rows.forEach(r=>{
            if(e.value.find(v=> v.id === r.id)){
                newSet.add(r.id);

            }else{
                newSet.delete(r.id);
            }
            

        });
        setSelectedIds(newSet);
    };
  return (
    <>
     <SelectOverlay
     selectedCount={selectedIds.size}
     onSelect={(count: number) => {
        const newSet = new Set(selectedIds);
        rows.slice(0,count).forEach(r=> newSet.add(r.id));
        setSelectedIds(newSet);
     }}
     />

    <DataTable
  value={rows}
  paginator
  lazy
  rows={rowsPerPage}
  totalRecords={total}
  first={page * rowsPerPage}
  loading={loading}
  onPage={onPage}
  selection={selectedRows}
  onSelectionChange={onSelectionChange}
  selectionMode="multiple"
  dataKey="id"
>


<Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />
        <Column field="title" header="TITLE"/>
       <Column field="place_of_origin" header="PLACE OF ORIGIN"/>
    <Column field="artist_display" header="ARTIST"/>
    <Column field="inscription" header="INSCRIPTION"/>
    <Column field="date_start" header="START DATE"/>
    <Column field="date_end" header="END DATE"/>
        
        </DataTable>

    </>
  )
}

            export default ArtTable;

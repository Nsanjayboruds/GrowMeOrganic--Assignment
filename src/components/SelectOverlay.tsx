import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef, useState } from "react";

export  default function SelectOverlay({selectedCount, onSelect}:Props){
    const ref =useRef<OverlayPanel>(null);
    const [count,setCount]= useState<number>(0);

    return(
        <div>
            <span>Selected:{selectedCount}rows</span>
            <Button
            label="Select Rows"
            onClick={(e)=>ref.current?.toggle(e)}
            style={{marginLeft:10}}

            />
            <OverlayPanel ref={ref}>
                <div style={{marginBottom :10}}>

                        <p>Select rows from current page</p>
                        <InputNumber value={count} onValueChange={e=>setCount(e.value?? 0)} />
                        <Button
                        label="Select"
                        onClick={()=>{
                            onSelect(count);
                            ref.current?.hide();
                        }}
                        style={{marginTop:10}}
                        />
                </div>
            </OverlayPanel>
        </div>
    );
}
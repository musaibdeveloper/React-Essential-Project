export default function Tabbutton({ children , onSelect , buttonSelected }) {
   
    return (
        <li><button className = "active" onClick={onSelect}>{children}</button></li>
    );
}
export default function Header(props) {
    return(
        <>
        <div id="header-container"
            className="flex justify-between items-center bg-sub text-black py-2 px-4">
            <div id="logo-container" 
                className="flex items-center font-montserrat-subrayada">
                    <img src="./assets/logo/NoteKi_v2.svg" style={{height: '30px'}}/>
            </div>
            <div id="page-title"
            className="font-montserrat font-medium text-black">
                <p>{props.tabTitle}</p>
            </div>
            <div>
                icons
            </div>
        </div>
        </>
    );
}
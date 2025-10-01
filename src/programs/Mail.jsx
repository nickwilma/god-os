import {useState} from "react";

const initialMails = [
    {id: "0", read: false, sender: 'SuperYummyAliens', subject: "Boo", body: "Hello World"},
    {id: '1', read: false, sender: 'SuperEvilAliens', subject: "Hello", body: "Hello World"},
    {id: '2', read: false, sender: 'NW', subject: "Ich bin Hund", body: "WUFF WUFF WUFF"},
    {id: '3', read: false, sender: 'Mark', subject: "applier", body: "What the helly"}
];


export default function Mail() {
    const [mails, setMails] = useState(initialMails);
    const [selectedMail, setSelectedMail] = useState(null);

    const clickedPreview = (mail) => {
        setMails(mails.map(m => {
            if(m.id === mail.id) {
                return {...m, read: true};
            }
            return m;
        }));
        setSelectedMail(mail);
    }

    return <div className="w-full h-full bg-white text-black flex flex-row">
        <div className={"overflow-y-scroll"}>
            {mails.map(mail => <MailPreview key={mail.id} mail={mail} clickedPreview={clickedPreview}/>)}
        </div>
        <VerticalLine/>
        <div>
            {selectedMail !== null ? <MailDetailView mail={selectedMail}/> : <div>No Content</div>}

        </div>
    </div>
}

function MailDetailView({mail}) {
    return <div className={'m-2 p-2 flex flex-col'}>
        <div>
            <span className={'font-bold'}>Absender:</span> {mail.sender}
        </div>
        <div>
            <span className={'font-bold'}>Betreff:</span> {mail.subject}
        </div>
        <VerticalLine/>
        <div>
            {mail.body}
        </div>
    </div>
}

function MailPreview({mail, clickedPreview}) {
    return <div onClick={() => clickedPreview(mail)} className={'m-2 p-2 bg-gray-200 rounded'}>
        <div>
            {mail.read ? <i className="bi bi-envelope-open-fill"></i> : <i className="bi bi-envelope-fill"></i>}
        </div>
        <div>
            <span className={'font-bold'}>Absender:</span> {mail.sender}
        </div>
        <div>
            <span className={'font-bold'}>Betreff:</span> {mail.subject}
        </div>
        <div>
            {mail.body.slice(0,10) + (mail.body.length > 10 ? "..." : "")}
        </div>
    </div>
}

function VerticalLine() {
    return <div className="border-l border-gray-400"></div>
}
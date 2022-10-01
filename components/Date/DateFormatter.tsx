
export default function DateFormatter({ date }: { date: string }) {
    
    const date__not__formatted = new Date(date); 

    let date__formatted = date__not__formatted.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    });

    date__formatted = date__formatted.replace('at', '/');
    


    return <>{date__formatted}</>;
}
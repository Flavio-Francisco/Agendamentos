import { Text } from 'react-native'
import { StringSchema } from 'yup';

interface Date {
    props: string
}


export function MaskDate({ props }: Date) {



    const date = new Date(props);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('pt-BR', options);
    console.log(formattedDate);


    return (
        <>
            <Text>{formattedDate}</Text>
        </>
    );
}
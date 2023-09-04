import { useParams } from 'react-router-dom';
const CharacterInfo = () => {
    const params = useParams();
    const {name} = params
    console.log('paramsss', params)
    return ( 
        <>
        <p>welcome to CharacterInfo page {name} </p>
        </>
     );
}
 
export default CharacterInfo;
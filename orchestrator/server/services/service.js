/**
 * @author: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyright:  2024 
*/

const 
    methodPut = 'PUT',
    methodPost = 'POST',
    methodGet = 'GET';

/**
 *  General Estruture HTTP REQUEST POST
 * 
 * @param {*} param0 
 * @returns 
 */
const fetchPostGeneral = ({
    dataSend,
    urlEndPoint
}) =>
{
    return fetchGeneral({
        dataSend: dataSend,
        urlEndPoint: urlEndPoint,
        type: methodPost     
    })
}

/**
 * General Structure HTTP REQUEST PUT
 * 
 * @param {*} param0 
 * @returns 
 */
const fetchPutGeneral = ({
    dataSend,
    urlEndPoint
}) => {
    return fetchGeneral({
        dataSend: dataSend,
        urlEndPoint: urlEndPoint,
        type: methodPut    
    })
};

/**
 * General Structure HTTP REQUEST PUT
 * 
 * @param {*} param0 
 * @returns 
 */
const fetchGetGeneral = ({
    dataSend,
    urlEndPoint
}) => {
    return fetchGeneral({
        dataSend: dataSend,
        urlEndPoint: urlEndPoint,
        type: methodGet  
    })
}

/**
 * General Structure HTTP REQUEST
 * 
 * @param {*} param0 
 * @returns 
 */
fetchGeneral = async ({
    dataSend,
    urlEndPoint,
    type
}) => {
    try {
        const response = await fetch(urlEndPoint, {
            method: type,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataSend),
        });

        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    fetchPutGeneral,
    fetchGetGeneral,
    fetchPostGeneral
}
import  { useEffect } from 'react';

const useTitle = title => {
    return (
        useEffect(() =>{
            document.title = `${title} - Java Bakery Shop`
        },[title])
    );
};

export default useTitle;
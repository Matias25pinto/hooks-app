import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({data: null, isLoading:true, hasError:false, error:null});
    const {data, isLoading, hasError, error} = state;

    useEffect(() => {
      getFetch();
    }, [url]);//de esta forma el useEffect se ejecut a cada vez que la url cambia
    
    const setLoadingState = () => {

       setState({
            data:null,
            isLoading:true,
            hasError:false,
            error: null,
        });
    }

    const getFetch = async () => {

        setLoadingState();
        
        const resp = await fetch(url);
        
        //sleep
        await new Promise(resolve => setTimeout(resolve, 1500));

        if( !resp.ok ){
            setState({
                data:null,
                isLoading:false,
                hasError:true,
                error: {
                    code:resp.status,
                    message: resp.statusText,
                },
            });
            return;
        }

        const data = await resp.json();
        setState({
            data:data,
            isLoading:false,
            hasError:false,
            error: null,
        });
    }

    return {
        data,
        isLoading,
        hasError
    }
}

export interface interfaceErrorMessageProps {
    
    errorMessage: string | undefined;

};

const ComponentErrorMessage : React.FC<interfaceErrorMessageProps> = ({ errorMessage }) => {

    return (

        <p className="errorMessage">{errorMessage}</p>

    );
};

export default ComponentErrorMessage;
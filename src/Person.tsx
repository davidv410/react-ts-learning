interface Props {
    name: string;
    age: number;
    isMarried: boolean;
}

export const Person = (props: Props) => {
    return(
        <>
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>This person {props.isMarried ? "is married" : "is not married"}</p>
        </>
    )
}
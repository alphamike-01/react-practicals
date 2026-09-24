function Employee({ img, name, des, id, dep}){
    return(
        <>
            <div className="w80 text-center p-10">
                <img src={img} className="mx-auto rounded-full border-4 border-blue-400 w-28 h-28"
                />
                <div className="mt-4 font-old text-xl">{name}</div>
                <p className="text-gry-500 font-semibold">{des}</p>
                <hr classNme="my-4"/>
                <p>
                    <span className="front-semibold">EMP ID: </span>{id}
                </p>
                <p>
                    <span className="front-semibold">Department: </span>{dep}
                </p>
            </div>
        </>
    )

}
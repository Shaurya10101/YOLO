const Navbar = () => {

    return (
        <>
            <div className="flex h-9 justify-center items-center bg-gradient-to-r from-[#BB0700] to-[#650B0B] text-white">
                <div className="flex font-poppins font-normal text-center">One month ,on us. 
                <span class="font-medium pl-1">Download the app today for one-month trial.</span>X
                </div>
            </div>
            <div className='flex h-20 bg-[#0D0D0D] items-center justify-center text-white'>
                <div className="flex gap-x-[292px]">
                    <div className="flex gap-x-[327px]">
                        <p>Logo</p>
                        <div>
                            <ul className="flex list-none gap-8 text-white">
                                <li><a>Features</a></li>
                                <li><a>Plans</a></li>
                                <li><a>Who we are</a></li>
                                <li><a>Patnerships</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p>2 icons</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Navbar
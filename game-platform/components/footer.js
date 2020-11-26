const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <span>Created by <strong>Franco Picco</strong></span>
                    <div>
                        <a href='/'><figure><img src="https://blogthinkbig.com/wp-content/uploads/sites/4/2020/06/GitHub-Desktop-Logo.jpg" /></figure></a>
                        <a href='/'><figure><img src="https://icons-for-free.com/iconfiles/png/512/linked+linkedin+logo+social+icon-1320191784782940875.png" /></figure></a>
                        <a href='/'><figure><img src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Emblem.png" /></figure></a>
                    </div>
                </div>
                <form>
                    <span>Found a bug? Tell us via mail.</span>
                    <input type="text" placeholder="your_mail@example.com" />
                    <textarea placeholder="Write your message here..." />
                    <input type='submit' value='submit' />
                </form>
            </div>
        </footer>
    )
}

export default Footer
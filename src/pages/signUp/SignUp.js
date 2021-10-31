export default class SignUp {

    getHtml() {
        return `
        <main>
            <figure class="bg-image"></figure>
            <section>
            <header class="header-form">Sign Up</header>
        
            <form class="form">
                <div class="form__block-first-name form__validate">
                    <label for="first-name">First Name</label>
                    <input class="form__input form__input_image_name" id="first-name" type="text"
                    placeholder="First Name">
                    <p class="form__error-message">Error message</p>
                </div>
        
                <div class="form__block-last-name form__validate">
                    <label for="last-name">Last Name</label>
                    <input class="form__input form__input_image_name" id="last-name" type="text"
                    placeholder="Last Name">
                    <p class="form__error-message">Error message</p>
                </div>
        
                <div class="form__block-email form__validate">
                    <label for="email">Email</label>
                    <input class="form__input form__input_image_email" id="email" type="text" placeholder="Email">
                    <p class="form__error-message">Error message</p>
                </div>
        
                <div class="form__block-password form__validate">
                    <label for="password">Password</label>
                    <input class="form__input form__input_image_password" id="password" type="password"
                    placeholder="Password">
                    <div class="form__block_show-hide-password">
                        <div class="form__block-password_hide-password"></div>
                    </div>                    
                    <p class="form__error-message">Error message</p>
                </div>
        
                <div class="form__block-confirm-password form__validate">
                    <label for="confirm-password">Confirm Password</label>
                    <input class="form__input form__input_image_confirm-password" id="confirm-password"
                    type="password" placeholder="Confirm Password">
                    <div class="form__block_show-hide-password">
                        <div class="form__block-confirm-password_hide-password"></div>
                    </div>                    
                    <p class="form__error-message">Error message</p>
                </div>
        
                <button class="form__button" type="submit">Sign Up</button>
            </form>
        
            <footer class="sign-in">
                <p class="sign-in__text">Already have an account?</p>
                <a class="sign-in__redirect" href="/itrex/sign-in">Sign in</a>
            </footer>
            </section>
        </main>
        `
    }
}
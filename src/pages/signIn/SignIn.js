export default class SignIn {

    getHtml() {
        return `
        <main>
            <figure class="bg-image"></figure>
            <section>
                <header class="header-form">Sign In</header>
    
                <form class="form">
                    <div class="form__block-email form__validate">
                        <label for="email">Email</label>
                        <input class="form__input form__input_image_email" id="email" type="text" placeholder="Email">
                        <p class="form__error-message">Error message</p>
                    </div>
    
                    <div class="form__block-password form__validate">
                        <label for="password">Password</label>
                        <input class="form__input form__input_image_password" id="password" type="text"
                        placeholder="Password">
                        <div class="form__block_show-hide-password">
                            <div class="form__block-password_show-password"></div>
                        </div>                                 
                        <p class="form__error-message">Error message</p>
                    </div>
    
                    <button class="form__button" type="submit">Sign In</button>
                </form>
                <div class="forgot-password">
                    <a class="forgot-password__redirect" href="/itrex/restore-password">Forgot Password?</a>
                </div>
    
                <footer class="sign-up">
                    <p class="sign-up__text">Don’t have an account?</p>
                    <a class="sign-up__redirect" href="/itrex/">Sign up</a>
                </footer>
            </section>
        </main>
        `;
    }
}
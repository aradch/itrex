export default class RequestRestorePassword {

    getHtml() {
        return `
        <main>
            <figure class="bg-image"></figure>
            <section>
            <header class="header">
                <h1 class="header__restore-password"><a href="/itrex/sign-in"></a>Restore Password</h1>
                <p class="header__text">Please use your email address, and we’ll send you the link to reset your password</p>
            </header>
        
            <form class="form">
                <div class="form__block-email form__validate">
                    <label for="email">Email</label>
                    <input class="form__input form__input_image_email" id="email" type="text" placeholder="Email">
                    <p class="form__error-message">Error message</p>
                </div>
        
                <button class="form__button" type="submit">Send Reset Link</button>
            </form>
            </section>
        </main>
        `;
    }
}
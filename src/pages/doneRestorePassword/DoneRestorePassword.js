export default class DoneRestorePassword {

    getHtml() {
        return `
        <main>
            <figure class="bg-image"></figure>
            <section>
                <h1 class="header-restore-password"><a href="/itrex/restore-password"></a>Restore Password</h1>
                <p class="text-restore-password">An email has been sent to <a class="email-redirect"
                href="#">example@exam.com</a>. Check your inbox, and click the reset link provided.</p>
            </section>
        </main>
        `
    }
}
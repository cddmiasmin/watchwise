import AuthenticationService from "../services/AuthenticationService.js";

const AuthenticationController = {

    async CreateSession(rep, res) {
        try {
            const requestToken = await AuthenticationService.CreateRequestToken();
            const sessionWithLogin = await AuthenticationService.CreateSessionWithLogin(requestToken, TMDB_USERNAME, TMDB_PASSWORD);
            if(sessionWithLogin) {
                let sessionAux = await AuthenticationService.CreateSessionWithLogin(requestToken, TMDB_USERNAME, TMDB_PASSWORD);
            }
            console.log(sessionId);
            res.json(sessionId);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
    }
};

export default AuthenticationController;
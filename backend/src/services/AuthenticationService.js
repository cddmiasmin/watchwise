const AuthenticationService = {

    async CreateRequestToken() {
        const url = api + `/authentication/token/new`;

        const response = await fetch(url, {
            method: 'GET',
            headers: tmdb_header
        });

        if (!response.ok) throw new Error('Erro ao gerar request_token');
            
        const data = await response.json();
        return data.request_token;     
    },

    async CreateSessionWithLogin(requestToken, TMDB_USERNAME, TMDB_PASSWORD) {
        const url = api + `account/${account_id}/watchlist`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                tmdb_header,
                'content-type': 'application/json',
            },
            body: JSON.stringify({        
                username: TMDB_USERNAME,
                password: TMDB_PASSWORD,
                request_token: requestToken           
            })
        });

        if (!response.ok) throw new Error('Erro ao criar sessão com login');
            
        const data = await response.json();
        return data.sucess;    
    }
};

export default AuthenticationService;
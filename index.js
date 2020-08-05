const { json } = require('micro');

module.exports = async (req, res) => {

    const { request, session, version } = await json(req);

    res.end(JSON.stringify(
        if (request['command'] === 'выключи компьютер') {
            return {
            version,
            session,
            session_state: null,
            user_state_update: null,
            response: {
                text: 'пришла команда "выключи компьютер"',
                tts: 'пришла команда выключи компьютер',
                end_session: true,
            }
        };
        }
    
            return {
            version,
            session,
            response: {
                text: 'привет, команда не пришла',
                tts: 'привет, команда не пришла',
                end_session: false,
            },
            state,
        };
    ));
};
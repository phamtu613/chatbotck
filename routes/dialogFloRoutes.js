const chatbot = require('../chatbot/chatbot');

module.exports = app => {
    
    app.get('/', (req, res) => {
        res.send({'hello': 'there'});
    });

    app.post('/api/df_text_query', async (req, res) => {
        let responses = await chatbot.textQuery(req.body.text, req.body.parametters);
        res.send(responses[0].queryResult);
  });
  // let responses = await sessionClient
    //     .detectIntent(request);

    app.post('/api/df_event_query', async (req, res) => {
        let responses = await chatbot.eventQuery(req.body.event, req.body.parametters);
        res.send(responses[0].queryResult);
    });

}
const express = require('express');
const Model = require('../models/model');
const Aufstellung = require('../models/aufstellung');
const Team = require('../models/team');
const Goal = require('../models/goal');
const Tabelle = require('../models/tabelle');
const Trainer = require('../models/trainer');
const Penalty = require('../models/penalty');
const router = express.Router();
const sort = { date: -1, time: 1 }
const table = { place: 1 }
const liga = 'u15'

router.get('', async (req, res) => {
    res.render('startseite', { data: await Model.find({ liga: liga }).sort(sort), team: await Tabelle.find({ liga: liga }), liga: liga, one: await Model.findOne({ liga: liga }) });
})

router.get('/create', async (req, res) => {
    res.render('create', { u15: await Tabelle.find({ liga: 'u15' }), herren: await Tabelle.find({ liga: 'ostseeliga' }), liga: liga  });
})

router.get('/editTable', async (req, res) => {
    res.render('table', { data: await Tabelle.find({ liga: liga }).sort(table), liga: liga, goals: await Goal.find({ verein: req.body.teamName, liga: liga }) });
})

router.get('/mannschaft/:name', async (req, res) => {
    res.render('mannschaft', { data: await Team.find({ teamName: req.params.name, liga: liga }), name: req.params.name, trainer: await Trainer.find({ teamName: req.params.name, liga: liga }), liga: liga })
})

router.get('/game/:id/:home/:away/:date', async (req, res) => {
    res.render('detail', { 
        data: await Model.findById(req.params.id), 
        aufstellungHome: await Team.find({teamName: req.params.home}),
        aufstellungAway: await Team.find({teamName: req.params.away}), 
        nameHome: req.params.home, 
        nameAway: req.params.away, 
        id: req.params.id, 
        date: req.params.date, 
        tableHome: await Tabelle.findOne({ name: req.params.home }), 
        tableAway: await Tabelle.findOne({ name: req.params.away }),
        liga: liga,
        goalsHome: await Goal.find({ gameID: req.params.id, verein: req.params.home }), 
        goalsAway: await Goal.find({ gameID: req.params.id, verein: req.params.away }),
    });
})

router.get('/:period/:id/:home/:away', async (req, res) => {
    res.render('period', { 
        data: await Model.findById(req.params.id),  
        period: req.params.period,
        goalsHome: await Goal.find({ gameID: req.params.id, verein: req.params.home }), 
        goalsAway: await Goal.find({ gameID: req.params.id, verein: req.params.away }),
        penaltysHome: await Penalty.find({ gameID: req.params.id, verein: req.params.home }), 
        penaltysAway: await Penalty.find({ gameID: req.params.id, verein: req.params.away }),
        liga: liga 
    });
})

router.get('/aufstellung/:name/:id', async (req, res) => {
    res.render('aufstellung', { 
        data: await Model.findById(req.params.id),
        players: await Team.find({ teamName: req.params.name, liga: liga }),
        trainers: await Trainer.find({ teamName: req.params.name, liga: liga }), 
        liga: liga,
        team: req.params.name,
        id: req.params.id
    });
})

router.get('/offizielle/:id', async (req, res) => {
    res.render('aufstellungOffizielle', { 
        data: await Model.findById(req.params.id),
        liga: liga,
        id: req.params.id
    });
})

router.post('/add', async (req, res) => {
    const data = new Model({
        home: await Tabelle.findOne({ name: req.body.home }),
        away: await Tabelle.findOne({ name: req.body.away }),
        date: req.body.date,
        time: req.body.time,
        stadion: req.body.stadion,
        referre1: req.body.referre1,
        referre2: req.body.referre2,
        linesperson1: req.body.linesperson1,
        linesperson2: req.body.linesperson2,
        liga: req.body.liga,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.post('/addGoal/:id/:name/:period', async (req, res) => {
    const data = new Goal({
        gameID: req.params.id,
        time: req.body.time,
        period: req.params.period,
        verein: req.params.name,
        torschütze: await Team.findOne({ jersey: req.body.torschütze, teamName: req.params.name }),
        vorlage1: await Team.findOne({ jersey: req.body.vorlage1, teamName: req.params.name }),
        vorlage2: await Team.findOne({ jersey: req.body.vorlage2, teamName: req.params.name })
    })

    try {
        await data.save();
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.post('/addPenalty/:id/:name/:period', async (req, res) => {
    const data = new Penalty({
        gameID: req.params.id,
        time: req.body.time,
        period: req.params.period,
        verein: req.params.name,
        player: await Team.findOne({ jersey: req.body.player, teamName: req.params.name }),
        vergehen: req.body.vergehen,
        length: req.body.length
    })

    try {
        await data.save();
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


router.post('/aufstellung/:name/:id', async (req, res) => {
    const aufstellung = new Aufstellung({
        teamName: req.params.name + " " + req.params.id,
        RF1: await Team.findOne({ fullname: req.body.RF1 }),
        C1: await Team.findOne({ fullname: req.body.C1 }),
        LF1: await Team.findOne({ fullname: req.body.LF1 }),
        RH1: await Team.findOne({ fullname: req.body.RH1 }),
        LH1: await Team.findOne({ fullname: req.body.LH1 }),
        RF2: await Team.findOne({ fullname: req.body.RF2 }),
        C2: await Team.findOne({ fullname: req.body.C2 }),
        LF2: await Team.findOne({ fullname: req.body.LF2 }),
        RH2: await Team.findOne({ fullname: req.body.RH2 }),
        LH2: await Team.findOne({ fullname: req.body.LH2 }),
        RF3: await Team.findOne({ fullname: req.body.RF3 }),
        C3: await Team.findOne({ fullname: req.body.C3 }),
        LF3: await Team.findOne({ fullname: req.body.LF3 }),
        RH3: await Team.findOne({ fullname: req.body.RH3 }),
        LH3: await Team.findOne({ fullname: req.body.LH3 }),
        RF4: await Team.findOne({ fullname: req.body.RF4 }),
        C4: await Team.findOne({ fullname: req.body.C4 }),
        LF4: await Team.findOne({ fullname: req.body.LF4 }),
        RH4: await Team.findOne({ fullname: req.body.RH4 }),
        LH4: await Team.findOne({ fullname: req.body.LH4 }),
        TW1: await Team.findOne({ fullname: req.body.TW1 }),
        TW2: await Team.findOne({ fullname: req.body.TW2 }),
        Trainer: req.body.trainer
    })
    try {

        const dataToSave = await aufstellung.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/addPlayer/:name', async (req, res) => {
    const player = new Team({
        jersey: req.body.jersey,
        fullname: req.body.fullname,
        image: req.body.image,
        teamName: req.params.name,
        liga: req.body.liga
    });

    try {
        const dataToSave = await player.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/addTrainer/:name', async (req, res) => {
    const trainer = new Trainer({
        fullname: req.body.fullname,
        liga: req.body.liga,
        teamName: req.params.name
    });

    try {
        await trainer.save();
        res.send('Trainer erfolgreich erstellt! --> Bitte gehe eine Seite zurück und lade diese neu :)')
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.post('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/updatePlayer/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Team.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/toggleLive/:id/:live', async (req, res) => {
    let live1
    req.params.live === 'true' ? live1 = false : live1 = true

    try {
        const id = req.params.id;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, {live: live1}, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/toggleCancled/:id/:abgesagt', async (req, res) => {
    let abgesagt1
    req.params.abgesagt === 'true' ? abgesagt1 = false : abgesagt1 = true

    try {
        const id = req.params.id;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, {abgesagt: abgesagt1}, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/updateTeam/:name', async (req, res) => {
    try {
        const updatedData = req.body;
        const options = { new: true };

        const result = await Tabelle.findOneAndUpdate({name: req.params.name, liga: liga}, updatedData, options)

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.post('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.id} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.post('/deleteTrainer/:name', async (req, res) => {
    try {
        const data = await Trainer.findOneAndDelete({ fullname: req.params.name})
        res.send('Trainer gelöscht. --> eine Seite zurückgehen und die Seite neu laden :)')
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.post('/deletePlayer/:name', async (req, res) => {
    try {
        const data = await Team.findOneAndDelete({ fullname: req.params.name})
        res.send('Spieler gelöscht. --> eine Seite zurückgehen und die Seite neu laden :)')
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;

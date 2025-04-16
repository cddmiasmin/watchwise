import _ from 'lodash';
import SearchService from "../services/SearchService.js";

const SearchController = {

    async Movie(req, res) {
        try {
            const query = req.params.query;
            const result = await SearchService.Movie(query);
            console.log(result);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err });
        }   
    },

    async Person(req, res) {
        try {
            const query = req.params.query;
            const result = await SearchService.Person(query);
            console.log(result);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err });
        }   
    },

    async Multi(req, res) {
   
        const query = req.params.query;
        const multi = await SearchService.Multi(query);
        const grouped = _.groupBy(multi.results, "media_type");

        const result = { 
            movies: grouped['movie'],
            people: grouped['person'],
        };
        
        res.json(result);
    },
 };

export default SearchController;
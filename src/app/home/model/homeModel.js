import Model from '../../../base/model/baseModel';

export default class Home extends Model {
    // define resource name as a string 
    resourceName () {
        return 'home';
    }

    // define fields to be included as resource properties as an array of strings 
    fields () {
        return ['title', 'subtitle', 'body', 'favicon'];
    }

    // define datetime fields to be converted to moment object 
    // and included as resource properties as an array of strings
    dates () {
        return ['current_date'];
    }

    // define resource relationships as an object. 
    // no need to think about 1 to m or m to m or etc.
    // relationships () {
    //     return {
    //         author: new User(),
    //         comments: new Comment(),
    //         tags: new Tag()
    //     };
    // }

    // define computed fields to be included as resource properties. 
    // hydrated resource object will be passed to the function as the first parameter. 
    // you are free to do what ever with it and return a value.
    // computed () {
    //     return {
    //         full_date (post) {
    //             return post.published_at.format('MMMM Do YYYY');
    //         },

    //         human_date (post) {
    //             return post.published_at.fromNow();
    //         },
            
    //         post_url (post) {
    //             return `/posts/${post.slug}/${post.id}`;
    //         }
    //     };
    // }
}
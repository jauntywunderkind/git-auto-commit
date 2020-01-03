"use module"
import watchman from "fb-watchman"
import Pipe from "async-iter-pipe"
import { gets} from "voodoo-opt"

export function WatchProject( ...opts){
	Pipe.call( this, ...opts)
	this.name= undefined
	this.client= undefined
	this.pipe= undefined
	this.fields= undefined

	this.configured= gets( this).then(()=> {
		if( this.fields=== undefined){
			
		}
	})
	this.watch= this.configured.then(()=> this._watch())
	this.subscribe= this.watch.then(()=> this._subscribe())
}
WatchProject.prototype= Object.create( Pipe.prototype)
WatchProject.prototype.constructor= WatchProject


WatchProject.prototype._watch= function(){
	if( !this.name){
		throw new Error( "no 
	}
	return new Promise(( resolve, reject)=> {
		client.command(['watch-project', this.name], function( err, resp){
			if( err){
				rej( err)
				return
			}
			
			//if ('warning' in resp) {
			//	console.log('warning: ', resp.warning)
			//}

			resolve( resp)
		})
	})
}

//function make_subscription(client, watch, relative_path) {
WatchProject.prototype._subscribe= async function(){
	const
		client= await this.client,
		watch= await this.watch


  sub = {
    // Match any `.js` file in the dir_of_interest
    expression: ["allof", ["match", "*.js"]],
    // Which fields we're interested in
    fields: ["name", "size", "mtime_ms", "exists", "type"]
  };
  if (relative_path) {
    sub.relative_root = relative_path;
  }

  client.command(['subscribe', watch, 'mysubscription', sub],
    function (error, resp) {
      if (error) {
        // Probably an error in the subscription criteria
        console.error('failed to subscribe: ', error);
        return;
      }
      console.log('subscription ' + resp.subscribe + ' established');
    });

  // Subscription results are emitted via the subscription event.
  // Note that this emits for all subscriptions.  If you have
  // subscriptions with different `fields` you will need to check
  // the subscription name and handle the differing data accordingly.
  // `resp`  looks like this in practice:
  //
  // { root: '/private/tmp/foo',
  //   subscription: 'mysubscription',
  //   files: [ { name: 'node_modules/fb-watchman/index.js',
  //       size: 4768,
  //       exists: true,
  //       type: 'f' } ] }
  client.on('subscription', function (resp) {
    if (resp.subscription !== 'mysubscription') return;

    resp.files.forEach(function (file) {
      // convert Int64 instance to javascript integer
      const mtime_ms = +file.mtime_ms;

      console.log('file changed: ' + file.name, mtime_ms);
    });
  });
}
	
}

"use module"
import watchman from "fb-watchman"
import Pipe from "async-iter-pipe"
import { gets} from "voodoo-opt"

export function WatchProject( ...opts){
	Pipe.call( this, ...opts)
	this.dir= undefined
	this.client= undefined
	this.pipe= undefined
	this.configured= gets( this)
	
}
WatchProject.prototype= Object.create( Pipe.prototype)
WatchProject.prototype.constructor= WatchProject


Object.defineProperties( WatchProject, {
	
})

WatchProject.prototype.listen= function(){

	await gets( this)
	ctx.pipe= ctx.pipe|| Pipe()
	client.command(['watch-project', dir], 
		function (error, resp) {
			if (error) {
				console.error('Error initiating watch:', error)
				return
			}

			// It is considered to be best practice to show any 'warning' or
			// 'error' information to the user, as it may suggest steps
			// for remediation
			if ('warning' in resp) {
				console.log('warning: ', resp.warning)
			}

			// `watch-project` can consolidate the watch for your
			// dir_of_interest with another watch at a higher level in the
			// tree, so it is very important to record the `relative_path`
			// returned in resp

			console.log('watch established on ', resp.watch,
									' relative_path', resp.relative_path)
		})
	return ctx.pipe
}

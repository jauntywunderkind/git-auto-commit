"use module"
import watchman from "fb-watchman"
import { conf, defaults as baseDefaults, setDefaults} from "voodoo-opt/config.js"
export { singleton, setSingleton} from "voodoo-opt/config.js"
import xdg from "xdg-basedir"

export const defaults= {
	...baseDefaults,
	_client: null,
	client( client_= conf( "client_", this)){
		if( !client_){
			this._client= client_= watchman.Client()
		}
		return client_
	},
	_configFile: null,
	async configFile( xdg= conf( "xdg", this)){
		const file= fs.readFile( xdg
	}
	projects(){
		
	}
}

setSingleton({ ...defaults})



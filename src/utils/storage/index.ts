interface ProxyStorage{
    getItem(key:string):any;
    setItem(key:string,value:string):void;
    removeItem(key:string):void;
    clear():void;
}

class sessionStorageProxy implements ProxyStorage{
    protected storage : ProxyStorage;

    constructor(storageModel:ProxyStorage){
        this.storage= storageModel
    }

    public setItem(key:string,value:any):void{
        this.storage.setItem(key,JSON.stringify(value))
    }
    public getItem(key:string):void{
        this.storage.getItem(key) || null
    }
    public removeItem(key:string):void{
        this.storage.removeItem(key)
    }

    public clear():void{
        this.storage.clear()
    }
}

//localStorage operate
class localStorageProxy extends sessionStorageProxy implements ProxyStorage{
    constructor(localStorage:ProxyStorage){
        super(localStorage)
    }
}

export const storagSession = new sessionStorageProxy(sessionStorage)
export const storageLocal = new localStorageProxy(localStorage)
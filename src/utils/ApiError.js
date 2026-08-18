class ApriError extends Error{
    constructor(
        statusCode,
        message:"something went wrong bro",
        error=[],
        stack=""

    ){

    super(message)
    this.StatusCode=statusCode
    this.data=nullthis.message=message
    this.success=false
    this.errors=this.errors
    if(stack){
        this.stack=stack
    }
    else {Error.captureStackTrace(this,this.constructor)}
    }
}
export {ApiError}
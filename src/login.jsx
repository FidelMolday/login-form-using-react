export const login = () => {
    return(
       <form>
        <label>email</label>
        <input type="email" placeholder="fidel@gmail.com" id="email" name="email"/>
        <label>password</label>
        <input type="password" placeholder="***********" id="password" name="password"/>
       </form>
    );
}
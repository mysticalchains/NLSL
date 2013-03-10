function loginTextFocus(v, elm)
{
	if(elm.value == v)
		elm.value = '';
	
	elm.style.color = '#444';
	elm.style.fontStyle = 'normal';
}
function loginTextBlur(v, elm)
{
	if(elm.value == '' || elm.value == null || !elm.value)
		elm.value = v;
	
	elm.style.color = '#ccc';
	elm.style.fontStyle = 'italic';
}
function loginPwdFocus(v, elm)
{
	if(elm.value == v)
	{
		elm.value = ''; 
		elm.type = 'password'; 
	}
	elm.style.color = '#444';
	elm.style.fontStyle = 'normal';
}
function loginPwdBlur(v, elm)
{
	if(elm.value == '' || elm.value == null || !elm.value)
	{
		elm.value = v;
		elm.type = 'text'; 
	}
	elm.style.color = '#ccc';
	elm.style.fontStyle = 'italic';
}
function loginValidation(user, pwd, userInfoValue, pwdInfoValue)
{
	if(user == '' || pwd == '' || user == userInfoValue || pwd == pwdInfoValue || user == null || pwd == null || !user || !pwd)
		alert('Você deve preencher todos os campos!');
	else
		alert( user + ", " + pwd);
}

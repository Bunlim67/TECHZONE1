const USERS_KEY = 'techzone_users_v1';
const SESSION_KEY = 'techzone_session_v1';

const copy = {
  en: {
    back: 'Back to store', kickerLogin: 'Member access', loginTitle: 'Welcome back', loginSub: 'Sign in to manage your TechZone shopping experience.', identity: 'Email or username', identityPh: 'you@example.com', password: 'Password', passwordPh: 'Enter your password', forgot: 'Forgot password?', remember: 'Keep me signed in on this device', signIn: 'Sign in', signingIn: 'Signing in…', noAccount: 'New to TechZone?', create: 'Create an account', loginHeroKicker: 'Your tech, one account', loginHeroTitle: 'Pick up where you <span>left off.</span>', loginHeroText: 'Save your details, return to your cart, and keep every TechZone order within easy reach.', signupKicker: 'Create your account', signupTitle: 'Join TechZone', signupSub: 'Create one account for faster shopping and order updates.', name: 'Full name', namePh: 'Your full name', username: 'Username', usernamePh: 'Choose a username', email: 'Email address', emailPh: 'you@example.com', newPassword: 'Create password', newPasswordPh: 'At least 8 characters', confirm: 'Confirm password', confirmPh: 'Enter it again', terms: 'I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.', createBtn: 'Create account', creating: 'Creating account…', hasAccount: 'Already have an account?', signInLink: 'Sign in', signupHeroKicker: 'Better shopping starts here', signupHeroTitle: 'Make TechZone <span>yours.</span>', signupHeroText: 'Create an account to move faster through checkout and keep your favorite technology close.', demo: 'Demo note: account data stays only in this browser. Connect a secure backend before production.', secure: 'Secure checkout', returns: '30-day returns', support: '24/7 support', required: 'This field is required.', identityError: 'Enter your email or username.', passwordError: 'Enter your password.', invalidLogin: 'Email, username, or password is incorrect.', nameError: 'Enter at least 2 characters.', usernameError: 'Use 3–20 letters, numbers, or underscores.', emailError: 'Enter a valid email address.', passwordRules: 'Use 8+ characters with a letter and a number.', confirmError: 'Passwords do not match.', termsError: 'Please accept the terms to continue.', duplicate: 'An account with this email or username already exists.', accountCreated: 'Account created. Sign in to continue.', resetMessage: 'Password reset is not connected in this demo.', weak: 'Weak', fair: 'Fair', good: 'Good', strong: 'Strong'
  },
  km: {
    back: 'ត្រឡប់ទៅហាង', kickerLogin: 'គណនីសមាជិក', loginTitle: 'ស្វាគមន៍ការត្រឡប់មកវិញ', loginSub: 'ចូលគណនីដើម្បីគ្រប់គ្រងបទពិសោធន៍ទិញទំនិញ TechZone។', identity: 'អ៊ីមែល ឬឈ្មោះអ្នកប្រើ', identityPh: 'you@example.com', password: 'ពាក្យសម្ងាត់', passwordPh: 'បញ្ចូលពាក្យសម្ងាត់', forgot: 'ភ្លេចពាក្យសម្ងាត់?', remember: 'រក្សាខ្ញុំឱ្យនៅតែចូលគណនី', signIn: 'ចូលគណនី', signingIn: 'កំពុងចូល…', noAccount: 'មិនទាន់មានគណនី?', create: 'បង្កើតគណនី', loginHeroKicker: 'បច្ចេកវិទ្យារបស់អ្នក គណនីតែមួយ', loginHeroTitle: 'បន្តពីកន្លែងដែលអ្នក <span>បានឈប់។</span>', loginHeroText: 'រក្សាទុកព័ត៌មាន ត្រឡប់ទៅកន្ត្រក និងគ្រប់គ្រងការបញ្ជាទិញ TechZone របស់អ្នក។', signupKicker: 'បង្កើតគណនីរបស់អ្នក', signupTitle: 'ចូលរួម TechZone', signupSub: 'បង្កើតគណនីសម្រាប់ការទិញកាន់តែលឿន និងទទួលព័ត៌មានការបញ្ជាទិញ។', name: 'ឈ្មោះពេញ', namePh: 'ឈ្មោះពេញរបស់អ្នក', username: 'ឈ្មោះអ្នកប្រើ', usernamePh: 'ជ្រើសឈ្មោះអ្នកប្រើ', email: 'អាសយដ្ឋានអ៊ីមែល', emailPh: 'you@example.com', newPassword: 'បង្កើតពាក្យសម្ងាត់', newPasswordPh: 'យ៉ាងតិច 8 តួអក្សរ', confirm: 'បញ្ជាក់ពាក្យសម្ងាត់', confirmPh: 'បញ្ចូលម្តងទៀត', terms: 'ខ្ញុំយល់ព្រមតាម <a href="#">លក្ខខណ្ឌ</a> និង <a href="#">គោលការណ៍ឯកជនភាព</a>។', createBtn: 'បង្កើតគណនី', creating: 'កំពុងបង្កើត…', hasAccount: 'មានគណនីរួចហើយ?', signInLink: 'ចូលគណនី', signupHeroKicker: 'ការទិញកាន់តែងាយស្រួល', signupHeroTitle: 'ធ្វើឱ្យ TechZone <span>ជារបស់អ្នក។</span>', signupHeroText: 'បង្កើតគណនីដើម្បីទូទាត់លឿន និងរក្សាបច្ចេកវិទ្យាដែលអ្នកចូលចិត្តនៅជិតអ្នក។', demo: 'ចំណាំ៖ ទិន្នន័យគណនីនៅតែក្នុងកម្មវិធីរុករកនេះ។ ត្រូវភ្ជាប់ backend សុវត្ថិភាពមុនប្រើពិត។', secure: 'ការទូទាត់សុវត្ថិភាព', returns: 'ប្តូរវិញក្នុង 30 ថ្ងៃ', support: 'ជំនួយ 24/7', required: 'ត្រូវបំពេញព័ត៌មាននេះ។', identityError: 'បញ្ចូលអ៊ីមែល ឬឈ្មោះអ្នកប្រើ។', passwordError: 'បញ្ចូលពាក្យសម្ងាត់។', invalidLogin: 'អ៊ីមែល ឈ្មោះអ្នកប្រើ ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ។', nameError: 'បញ្ចូលយ៉ាងតិច 2 តួអក្សរ។', usernameError: 'ប្រើអក្សរ លេខ ឬ _ ចំនួន 3–20។', emailError: 'បញ្ចូលអ៊ីមែលត្រឹមត្រូវ។', passwordRules: 'ប្រើ 8+ តួអក្សរ ដែលមានអក្សរ និងលេខ។', confirmError: 'ពាក្យសម្ងាត់មិនដូចគ្នា។', termsError: 'សូមយល់ព្រមតាមលក្ខខណ្ឌ។', duplicate: 'អ៊ីមែល ឬឈ្មោះអ្នកប្រើនេះមានរួចហើយ។', accountCreated: 'បានបង្កើតគណនី។ សូមចូលគណនី។', resetMessage: 'ការកំណត់ពាក្យសម្ងាត់ឡើងវិញមិនទាន់បានភ្ជាប់ក្នុង demo ទេ។', weak: 'ខ្សោយ', fair: 'មធ្យម', good: 'ល្អ', strong: 'ខ្លាំង'
  }
};

let lang = localStorage.getItem('techzone_lang') || 'en';

function applyLanguage(nextLang){
  lang = copy[nextLang] ? nextLang : 'en';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-copy]').forEach((element)=>{
    const value = copy[lang][element.dataset.copy];
    if(value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll('[data-copy-placeholder]').forEach((element)=>{
    const value = copy[lang][element.dataset.copyPlaceholder];
    if(value !== undefined) element.placeholder = value;
  });
  document.querySelectorAll('[data-lang]').forEach((button)=>button.classList.toggle('active',button.dataset.lang === lang));
  localStorage.setItem('techzone_lang',lang);
}

function getUsers(){
  try{return JSON.parse(localStorage.getItem(USERS_KEY)) || []}catch{return []}
}

async function hashPassword(password){
  if(window.crypto?.subtle){
    const data = new TextEncoder().encode(`techzone-demo:${password}`);
    const hash = await crypto.subtle.digest('SHA-256',data);
    return Array.from(new Uint8Array(hash)).map((byte)=>byte.toString(16).padStart(2,'0')).join('');
  }
  return btoa(unescape(encodeURIComponent(password)));
}

function showMessage(text,type='error'){
  const box = document.getElementById('formMessage');
  if(!box) return;
  box.textContent = text;
  box.className = `form-message show ${type}`;
  box.setAttribute('role',type === 'error' ? 'alert' : 'status');
}

function setError(id,message=''){
  const input = document.getElementById(id);
  const error = document.getElementById(`error-${id}`);
  input?.closest('.input-wrap')?.classList.toggle('invalid',Boolean(message));
  if(input) input.setAttribute('aria-invalid',Boolean(message).toString());
  if(error) error.textContent = message;
}

function clearErrors(){
  document.querySelectorAll('.error-msg').forEach((element)=>element.textContent='');
  document.querySelectorAll('.input-wrap').forEach((element)=>element.classList.remove('invalid'));
  document.querySelectorAll('input').forEach((element)=>element.setAttribute('aria-invalid','false'));
  const box = document.getElementById('formMessage');
  if(box) box.className='form-message';
}

function setBusy(button,busy,key,idleKey){
  button.disabled=busy;
  button.innerHTML=busy ? `<i class="fa-solid fa-circle-notch fa-spin"></i><span>${copy[lang][key]}</span>` : `<span>${copy[lang][idleKey]}</span><i class="fa-solid fa-arrow-right"></i>`;
}

document.querySelectorAll('[data-lang]').forEach((button)=>button.addEventListener('click',()=>applyLanguage(button.dataset.lang)));
document.querySelectorAll('.password-toggle').forEach((button)=>button.addEventListener('click',()=>{
  const input=document.getElementById(button.dataset.target);
  const show=input.type==='password';
  input.type=show?'text':'password';
  button.setAttribute('aria-label',show?'Hide password':'Show password');
  button.innerHTML=`<i class="fa-regular ${show?'fa-eye-slash':'fa-eye'}"></i>`;
}));

document.getElementById('forgotPassword')?.addEventListener('click',()=>showMessage(copy[lang].resetMessage,'success'));

const passwordInput=document.getElementById('password');
passwordInput?.addEventListener('input',()=>{
  const value=passwordInput.value;
  let score=0;
  if(value.length>=8) score++;
  if(/[a-z]/i.test(value)&&/\d/.test(value)) score++;
  if(/[A-Z]/.test(value)&&/[a-z]/.test(value)) score++;
  if(/[^A-Za-z0-9]/.test(value)&&value.length>=10) score++;
  const colors=['#dc2626','#f59e0b','#65a30d','#15803d'];
  document.querySelectorAll('.strength span').forEach((bar,index)=>bar.style.background=index<score?colors[score-1]:'#e7e5e4');
  const label=document.querySelector('.strength-label');
  if(label) label.textContent=value ? copy[lang][['weak','fair','good','strong'][Math.max(score-1,0)]] : '';
});

document.getElementById('signupForm')?.addEventListener('submit',async(event)=>{
  event.preventDefault();
  clearErrors();
  const form=event.currentTarget;
  const name=document.getElementById('name').value.trim();
  const username=document.getElementById('username').value.trim();
  const email=document.getElementById('email').value.trim().toLowerCase();
  const password=document.getElementById('password').value;
  const confirm=document.getElementById('confirmPassword').value;
  const terms=document.getElementById('terms').checked;
  let valid=true;
  if(name.length<2){setError('name',copy[lang].nameError);valid=false}
  if(!/^[A-Za-z0-9_]{3,20}$/.test(username)){setError('username',copy[lang].usernameError);valid=false}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setError('email',copy[lang].emailError);valid=false}
  if(password.length<8||!/[A-Za-z]/.test(password)||!/\d/.test(password)){setError('password',copy[lang].passwordRules);valid=false}
  if(confirm!==password){setError('confirmPassword',copy[lang].confirmError);valid=false}
  if(!terms){document.getElementById('error-terms').textContent=copy[lang].termsError;valid=false}
  if(!valid){form.querySelector('[aria-invalid="true"]')?.focus();return}
  const users=getUsers();
  if(users.some((user)=>user.email===email||user.username.toLowerCase()===username.toLowerCase())){showMessage(copy[lang].duplicate);return}
  const button=form.querySelector('.submit-btn');
  setBusy(button,true,'creating','createBtn');
  const passwordHash=await hashPassword(password);
  users.push({id:`tz_${Date.now()}`,name,username,email,passwordHash,createdAt:new Date().toISOString()});
  localStorage.setItem(USERS_KEY,JSON.stringify(users));
  window.location.href=`login.html?created=1&identity=${encodeURIComponent(email)}`;
});

document.getElementById('loginForm')?.addEventListener('submit',async(event)=>{
  event.preventDefault();
  clearErrors();
  const form=event.currentTarget;
  const identity=document.getElementById('identity').value.trim().toLowerCase();
  const password=document.getElementById('password').value;
  let valid=true;
  if(!identity){setError('identity',copy[lang].identityError);valid=false}
  if(!password){setError('password',copy[lang].passwordError);valid=false}
  if(!valid){form.querySelector('[aria-invalid="true"]')?.focus();return}
  const button=form.querySelector('.submit-btn');
  setBusy(button,true,'signingIn','signIn');
  const passwordHash=await hashPassword(password);
  const user=getUsers().find((item)=>(item.email===identity||item.username.toLowerCase()===identity)&&item.passwordHash===passwordHash);
  if(!user){setBusy(button,false,'signingIn','signIn');showMessage(copy[lang].invalidLogin);return}
  localStorage.setItem(SESSION_KEY,JSON.stringify({id:user.id,name:user.name,username:user.username,email:user.email,signedInAt:new Date().toISOString()}));
  window.location.href='index.html';
});

const params=new URLSearchParams(window.location.search);
if(params.get('created')==='1'){
  showMessage(copy[lang].accountCreated,'success');
  const identity=document.getElementById('identity');
  if(identity) identity.value=params.get('identity')||'';
}
applyLanguage(lang);

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  private usersList: Array<any> = [
    {userName: 'Chuck Norris', email: 'chuck.norris@globant.com'},
    {userName: 'Tyrion Lannister', email: 'tyrion.lannister@globant.com'},
    {userName: 'Walter White', email: 'walter.white@globant.com'},
    {userName: 'Sheldon Cooper', email: 'sheldo.cooper@globant.com'},
    {userName: 'Hodor Hodor', email: 'hodor.hodor@globant.com'},
    {userName: 'Homer Simpson', email: 'homer.simpson@globant.com'}
  ]

  private addUserErrors: any = {
    EMAIL_ALREADY_EXISTS: 'This email address already exists',
    INCOMPLETE_MANDATORY_FIELDS: 'Please complete all mandatory fields'
  }

  private uploadErrors: any = {
    WRONG_FILE: 'The file format or contents are not correct, please verify and try again',
    INCOMPLETE_MANDATORY_FIELDS: 'Please complete all mandatory fields'
  }
    
  public emptyAddUserModal: Boolean = false;
  public actualError: String = '';

  public fileName: String = '';
  public fileSrc: String= '#';

  constructor() { }

  ngOnInit() {
  }

  addUserClick(username, email, modal) {
    // regex for formatting the name
    const formattedUserName = username.value.replace(/^\s+|\s+$|\s+(?=\s)/g, "")
    const formattedemail = email.value.replace(/^\s+|\s+$|\s+(?=\s)/g, "")

    const noSpacesUserName =  username.value.replace(/\s/g, '')
    const noSpacesEmail =  email.value.replace(/\s/g, '')
    // regex for removing whitespaces 
    if( noSpacesUserName === '' || noSpacesEmail === '') {
      this.actualError = this.addUserErrors.INCOMPLETE_MANDATORY_FIELDS;       
      return null;
    }

    if(this.usersList.map(el => el.email).indexOf(email.value) == -1){
      const newUser = {
        userName: username.value,
        email: email.value
      }
      this.usersList.push(newUser);
      username.value = ''
      email.value = '';
      modal.hide();
    } else {
      this.actualError = this.addUserErrors.EMAIL_ALREADY_EXISTS;
    }
  }

   fileValueChange(input) {
    if(input.files[0]) {
      this.fileName = input.files[0].name;
      let reader = new FileReader();
      reader.onload = (e: Event) => {
        this.fileSrc = reader.result;      
      }
      reader.readAsDataURL(input.files[0])
    }
    
   }
  browseClick() {
    this.fileName = '';
    this.fileSrc = '#';
  }

  
  uploadClick(modal) {
    if(this.fileSrc === '#') {
      alert('please add a file');
    }
    return;
  }
}

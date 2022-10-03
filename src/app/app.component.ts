import { Component } from '@angular/core';
import {faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {faHeadSideVirus} from '@fortawesome/free-solid-svg-icons';
import {faBuildingColumns} from '@fortawesome/free-solid-svg-icons';
import {faDiagramProject} from '@fortawesome/free-solid-svg-icons';
import {faAt} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'porfolio';
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faHome = faHome;
  faHeadSideVirus = faHeadSideVirus;
  faAddressCard = faAddressCard;
  faBuildingColumns = faBuildingColumns;
  faDiagramProject = faDiagramProject;
  faAt = faAt;
  faLinkedinIn = faLinkedinIn;
  faBars = faBars
}

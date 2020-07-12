import {SidenavProjectionService} from './sidenav-projection.service';
import {TestBed} from '@angular/core/testing';
import {SidenavAttachment} from './sidenav-attachment';
import {ComponentPortal} from '@angular/cdk/portal';
import {Component} from '@angular/core';

@Component({
  selector: 'cs-sidenav-template',
  template: ''
})
class SidenavTemplateComponent {}

describe('SidenavProjectionService', () => {

  let service: SidenavProjectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidenavProjectionService],
      declarations: [SidenavTemplateComponent]
    });

    service = TestBed.inject(SidenavProjectionService);
  });

  it('should stores the attachment', () => {
    const portal = new ComponentPortal(SidenavTemplateComponent);
    const attachment = new SidenavAttachment(portal, 0);

    service.attach(attachment);

    expect(service.attachments$.getValue()).toContain(jasmine.objectContaining({...attachment}));
  });

  it('should removes the attachment', () => {
    const portal = new ComponentPortal(SidenavTemplateComponent);
    const attachment = new SidenavAttachment(portal, 0);

    service.attach(attachment);

    service.detach(a => a.id === attachment.id);

    expect(service.attachments$.getValue()).not.toContain(jasmine.objectContaining({...attachment}));
  });

});

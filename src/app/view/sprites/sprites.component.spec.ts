import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpritesComponent } from './sprites.component';

describe('SpritesComponent', () => {
    let component: SpritesComponent;
    let fixture: ComponentFixture<SpritesComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [SpritesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SpritesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

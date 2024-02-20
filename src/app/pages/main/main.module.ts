import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { SideAComponent } from './business-card/side-a/side-a.component';
import { SideBComponent } from './business-card/side-b/side-b.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SkillsComponent } from './skills/skills.component';
import { SoftSkillsComponent } from './skills/soft-skills/soft-skills.component';
import { StackComponent } from './skills/stack/stack.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainComponent,
    BusinessCardComponent,
    SideAComponent,
    SideBComponent,
    SkillsComponent,
    SoftSkillsComponent,
    StackComponent,
    ProjectsComponent,
    ProjectComponent,
  ],
  exports: [MainComponent],
  imports: [CommonModule, ComponentsModule, RouterModule],
})
export class MainModule {}

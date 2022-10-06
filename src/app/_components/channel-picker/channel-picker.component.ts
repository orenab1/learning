import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QuestionTopic } from 'src/app/_models/questionTopic';
import { ChannelsInfoService } from 'src/app/_services/channels-info.service';

@Component({
  selector: 'app-channel-picker',
  templateUrl: './channel-picker.component.html',
  styleUrls: ['./channel-picker.component.scss']
})
export class ChannelPickerComponent implements OnInit {

  @Output() selectedChannel:EventEmitter<QuestionTopic>=new EventEmitter<QuestionTopic>();


  constructor(private channelsInfoService:ChannelsInfoService) {    
    console.log(channelsInfoService.getData())
   }

  ngOnInit(): void {

  }

  mainCategory = {
    title: 'צד שרת',
    id: 1
  };
  subcategory = {
    title: 'nodejs',
    parentId: 1
  };

  mainGroups = [
    {
      title: 'צד לקוח',
      id: 1
    },
    {
      title: 'צד שרת',
      id: 2
    }
  ]

  subCategories = [
    {
      title: 'reactjs',
      parentId: 1
    },
    {
      title: 'angular',
      parentId: 1
    },
    {
      title: 'nodejs',
      parentId: 2
    }
  ]

  filterSubById(id : number) {
    return this.subCategories.filter(item => item.parentId === id);
}
channelSelected(){
  const questionTopic:QuestionTopic={
    topicName:'topic name',
    channelUrl:'channel url'
  }
  this.selectedChannel.emit(questionTopic);
  //alert(this.subcategory.title)
}
}

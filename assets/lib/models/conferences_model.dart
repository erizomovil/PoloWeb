
class Conference {
  final int id; // Cambiar a int
  final String name;
  final String location;
  final String summary;
  final ConferenceSchedule conferenceSchedule;
  bool userLikes;
  final List<Event> events;

  Conference({
    required this.id,
    required this.name,
    required this.location,
    required this.summary,
    required this.conferenceSchedule,
    this.userLikes = false,
    required this.events,
  });

  factory Conference.fromJson(Map<String, dynamic> json) {
    return Conference(
      id: json['id'],
      name: json['name'],
      location: json['location'],
      summary: json['summary'],
      conferenceSchedule: ConferenceSchedule(
      startDate: json['startDate'],
      endDate: json['endDate'],
      startTime: json['startTime'],
      endTime: json['endTime'],
    ),
      userLikes: json['userLikes'] ?? false,
      events: [],
  );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'location': location,
      'summary': summary,
      'conferenceSchedule': conferenceSchedule.toJson(),
      'userLikes': userLikes,
      'events': events.map((event) => event.toJson()).toList(),
    };
  }
  // Método copyWith para permitir la modificación de conferenceSchedule
  Conference copyWith({
    ConferenceSchedule? conferenceSchedule,
    bool? userLikes,
    List<Event>? events,
  }) {
    return Conference(
      id: this.id,
      name: this.name,
      location: this.location,
      summary: this.summary,
      conferenceSchedule: conferenceSchedule ?? this.conferenceSchedule,
      userLikes: userLikes ?? this.userLikes,
      events: events ?? this.events,
    );
  }
}

class ConferenceSchedule {
  final String startDate;
  final String endDate;
  final String startTime;
  final String endTime;

  ConferenceSchedule({required this.startDate, required this.endDate, required this.startTime, required this.endTime});
   
  factory ConferenceSchedule.fromJson(Map<String, dynamic> json) {
    return ConferenceSchedule(startDate: json['startDate'], endDate: json['endDate'], startTime: json['startTime'], endTime: json['endTime']);
  }

  Map<String, dynamic> toJson() {
    return {'startDate': startDate, 'startTime': startTime, 'endTime': endTime};
  }
  // Método copyWith para modificar solo algunos valores
  ConferenceSchedule copyWith({
    String? startDate,
    String? endDate,
    String? startTime,
    String? endTime,
  }) {
    return ConferenceSchedule(
      startDate: startDate ?? this.startDate,
      endDate: endDate ?? this.endDate,
      startTime: startTime ?? this.startTime,
      endTime: endTime ?? this.endTime,
    );
  }

}


class Event {
  final int id;
  final String eventName;
  final String eventLocation;
  final EventSchedule eventSchedule;
  bool userLikes;
  final String? description;
  final int conferenceId; 

  Event({
    required this.id,
    required this.eventName,
    required this.eventLocation,
    required this.eventSchedule,
    required this.userLikes,
    this.description,
    required this.conferenceId,
  });

  factory Event.fromJson(Map<String, dynamic> json) {
    return Event(
      id: json['id'],
      eventName: json['eventName'],
      eventLocation: json['eventLocation'],
      eventSchedule: EventSchedule.fromJson(json['eventSchedule']),
      userLikes: json['userLikes'] ?? false,
      description: json['description'],
      conferenceId: json['conference'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'eventName': eventName,
      'eventLocation': eventLocation,
      'eventSchedule': eventSchedule.toJson(),
      'userLikes': userLikes,
      'description': description,
      'conference': conferenceId,
    };
  }
  Event copyWith({
    EventSchedule? eventSchedule,
    bool? userLikes,
  }) {
    return Event(
      id: this.id,
      eventName: this.eventName,
      eventLocation: this.eventLocation,
      eventSchedule: eventSchedule ?? this.eventSchedule,
      userLikes: userLikes ?? this.userLikes,
      description: this.description,
      conferenceId: this.conferenceId,
    );
  }
}

class EventSchedule {
  final String eventDate;
  final String startTime;
  final String endTime;

  EventSchedule({required this.eventDate, required this.startTime, required this.endTime});

  factory EventSchedule.fromJson(Map<String, dynamic> json) {
    return EventSchedule(eventDate: json['eventDate'], startTime: json['startTime'], endTime: json['endTime']);
  }

  Map<String, dynamic> toJson() {
    return {'eventDate': eventDate, 'startTime': startTime, 'endTime': endTime};
  }
  // Método copyWith para permitir la modificación de eventDate, startTime y endTime
  EventSchedule copyWith({
    String? eventDate,
    String? startTime,
    String? endTime,
  }) {
    return EventSchedule(
      eventDate: eventDate ?? this.eventDate,
      startTime: startTime ?? this.startTime,
      endTime: endTime ?? this.endTime,
    );
  }
}


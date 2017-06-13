"use strict";
/**
 * @classdesc
 * Message constants for the communication with BigBlueButton
 * @constructor
 */
  function Constants () {
    return {
        // Redis channels
        FROM_BBB_TRANSCODE_SYSTEM_CHAN : "bigbluebutton:from-bbb-transcode:system",
        FROM_VOICE_CONF_SYSTEM_CHAN: "bigbluebutton:from_voice_conf:system",
        TO_BBB_TRANSCODE_SYSTEM_CHAN: "bigbluebutton:to-bbb-transcode:system",

        // RedisWrapper events
        REDIS_MESSAGE : "redis_message",

        // Message identifiers
        START_TRANSCODER_REQUEST: "start_transcoder_request_message",
        START_TRANSCODER_REPLY: "start_transcoder_reply_message",
        STOP_TRANSCODER_REQUEST: "stop_transcoder_request_message",
        STOP_TRANSCODER_REPLY: "stop_transcoder_reply_message",
        DESKSHARE_RTMP_BROADCAST_STARTED: "deskshare_rtmp_broadcast_started_message",
        DESKSHARE_RTMP_BROADCAST_STOPPED: "deskshare_rtmp_broadcast_stopped_message",

        // Redis messages fields 
        USER_ID : "user_id",
        OPTIONS: "options",
        VOICE_CONF_ID : "voice_conf_id",
        TRANSCODER_ID : "transcoder_id",
        CONFERENCE_NAME: "conference_name",
        STREAM_URL: "stream_url",
        TIMESTAMP: "timestamp",
        VIDEO_WIDTH: "vw",
        VIDEO_HEIGHT: "vh",

        // RTP params
        MEETING_ID : "meeting_id",
        VOICE_CONF : "voice_conf",
        KURENTO_ENDPOINT_ID : "kurento_endpoint_id",
        PARAMS : "params",
        MEDIA_DESCRIPTION: "media_description",
        LOCAL_IP_ADDRESS: "local_ip_address",
        LOCAL_VIDEO_PORT: "local_video_port",
        DESTINATION_IP_ADDRESS : "destination_ip_address",
        DESTINATION_VIDEO_PORT : "destination_video_port",
        REMOTE_VIDEO_PORT : "remote_video_port",
        CODEC_NAME: "codec_name",
        CODEC_ID: "codec_id",
        CODEC_RATE: "codec_rate",
        RTP_PROFILE: "rtp_profile",
        SEND_RECEIVE: "send_receive",
        FRAME_RATE: "frame_rate",
        INPUT: "input",
        KURENTO_TOKEN : "kurento_token",
        SCREENSHARE: "deskShare",
        STREAM_TYPE: "stream_type",
        STREAM_TYPE_SCREENSHARE: "stream_type_deskshare",
        STREAM_TYPE_VIDEO: "stream_type_video",
        RTP_TO_RTMP: "transcode_rtp_to_rtmp",
        TRANSCODER_CODEC: "codec",
        TRANSCODER_TYPE: "transcoder_type",
        CALLERNAME: "callername"
    }
}

module.exports = Constants();


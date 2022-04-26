
  namespace proto {
      // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace message. */
export namespace message {

    /** Properties of a LoginAccountRequest. */
    interface ILoginAccountRequest {

        /** LoginAccountRequest PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** LoginAccountRequest AccountName */
        AccountName?: (string|null);

        /** LoginAccountRequest Password */
        Password?: (string|null);

        /** LoginAccountRequest BuildNo */
        BuildNo?: (string|null);

        /** LoginAccountRequest Key */
        Key?: (number|Long|null);
    }

    /** Represents a LoginAccountRequest. */
    class LoginAccountRequest implements ILoginAccountRequest {

        /**
         * Constructs a new LoginAccountRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.ILoginAccountRequest);

        /** LoginAccountRequest PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** LoginAccountRequest AccountName. */
        public AccountName: string;

        /** LoginAccountRequest Password. */
        public Password: string;

        /** LoginAccountRequest BuildNo. */
        public BuildNo: string;

        /** LoginAccountRequest Key. */
        public Key: (number|Long);

        /**
         * Creates a new LoginAccountRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginAccountRequest instance
         */
        public static create(properties?: message.ILoginAccountRequest): message.LoginAccountRequest;

        /**
         * Encodes the specified LoginAccountRequest message. Does not implicitly {@link message.LoginAccountRequest.verify|verify} messages.
         * @param message LoginAccountRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.ILoginAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginAccountRequest message, length delimited. Does not implicitly {@link message.LoginAccountRequest.verify|verify} messages.
         * @param message LoginAccountRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.ILoginAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginAccountRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.LoginAccountRequest;

        /**
         * Decodes a LoginAccountRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.LoginAccountRequest;

        /**
         * Verifies a LoginAccountRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginAccountRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginAccountRequest
         */
        public static fromObject(object: { [k: string]: any }): message.LoginAccountRequest;

        /**
         * Creates a plain object from a LoginAccountRequest message. Also converts values to other types if specified.
         * @param message LoginAccountRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.LoginAccountRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginAccountRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginAccountResponse. */
    interface ILoginAccountResponse {

        /** LoginAccountResponse PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** LoginAccountResponse Error */
        Error?: (number|null);

        /** LoginAccountResponse AccountName */
        AccountName?: (string|null);
    }

    /** Represents a LoginAccountResponse. */
    class LoginAccountResponse implements ILoginAccountResponse {

        /**
         * Constructs a new LoginAccountResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.ILoginAccountResponse);

        /** LoginAccountResponse PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** LoginAccountResponse Error. */
        public Error: number;

        /** LoginAccountResponse AccountName. */
        public AccountName: string;

        /**
         * Creates a new LoginAccountResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginAccountResponse instance
         */
        public static create(properties?: message.ILoginAccountResponse): message.LoginAccountResponse;

        /**
         * Encodes the specified LoginAccountResponse message. Does not implicitly {@link message.LoginAccountResponse.verify|verify} messages.
         * @param message LoginAccountResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.ILoginAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginAccountResponse message, length delimited. Does not implicitly {@link message.LoginAccountResponse.verify|verify} messages.
         * @param message LoginAccountResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.ILoginAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginAccountResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.LoginAccountResponse;

        /**
         * Decodes a LoginAccountResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.LoginAccountResponse;

        /**
         * Verifies a LoginAccountResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginAccountResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginAccountResponse
         */
        public static fromObject(object: { [k: string]: any }): message.LoginAccountResponse;

        /**
         * Creates a plain object from a LoginAccountResponse message. Also converts values to other types if specified.
         * @param message LoginAccountResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.LoginAccountResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginAccountResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePlayerRequest. */
    interface ICreatePlayerRequest {

        /** CreatePlayerRequest PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** CreatePlayerRequest PlayerName */
        PlayerName?: (string|null);

        /** CreatePlayerRequest Sex */
        Sex?: (number|null);
    }

    /** Represents a CreatePlayerRequest. */
    class CreatePlayerRequest implements ICreatePlayerRequest {

        /**
         * Constructs a new CreatePlayerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.ICreatePlayerRequest);

        /** CreatePlayerRequest PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** CreatePlayerRequest PlayerName. */
        public PlayerName: string;

        /** CreatePlayerRequest Sex. */
        public Sex: number;

        /**
         * Creates a new CreatePlayerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePlayerRequest instance
         */
        public static create(properties?: message.ICreatePlayerRequest): message.CreatePlayerRequest;

        /**
         * Encodes the specified CreatePlayerRequest message. Does not implicitly {@link message.CreatePlayerRequest.verify|verify} messages.
         * @param message CreatePlayerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.ICreatePlayerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePlayerRequest message, length delimited. Does not implicitly {@link message.CreatePlayerRequest.verify|verify} messages.
         * @param message CreatePlayerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.ICreatePlayerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePlayerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.CreatePlayerRequest;

        /**
         * Decodes a CreatePlayerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.CreatePlayerRequest;

        /**
         * Verifies a CreatePlayerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreatePlayerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePlayerRequest
         */
        public static fromObject(object: { [k: string]: any }): message.CreatePlayerRequest;

        /**
         * Creates a plain object from a CreatePlayerRequest message. Also converts values to other types if specified.
         * @param message CreatePlayerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.CreatePlayerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePlayerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginPlayerRequset. */
    interface ILoginPlayerRequset {

        /** LoginPlayerRequset PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** LoginPlayerRequset PlayerId */
        PlayerId?: (number|Long|null);

        /** LoginPlayerRequset Key */
        Key?: (number|Long|null);
    }

    /** Represents a LoginPlayerRequset. */
    class LoginPlayerRequset implements ILoginPlayerRequset {

        /**
         * Constructs a new LoginPlayerRequset.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.ILoginPlayerRequset);

        /** LoginPlayerRequset PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** LoginPlayerRequset PlayerId. */
        public PlayerId: (number|Long);

        /** LoginPlayerRequset Key. */
        public Key: (number|Long);

        /**
         * Creates a new LoginPlayerRequset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginPlayerRequset instance
         */
        public static create(properties?: message.ILoginPlayerRequset): message.LoginPlayerRequset;

        /**
         * Encodes the specified LoginPlayerRequset message. Does not implicitly {@link message.LoginPlayerRequset.verify|verify} messages.
         * @param message LoginPlayerRequset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.ILoginPlayerRequset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginPlayerRequset message, length delimited. Does not implicitly {@link message.LoginPlayerRequset.verify|verify} messages.
         * @param message LoginPlayerRequset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.ILoginPlayerRequset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginPlayerRequset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginPlayerRequset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.LoginPlayerRequset;

        /**
         * Decodes a LoginPlayerRequset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginPlayerRequset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.LoginPlayerRequset;

        /**
         * Verifies a LoginPlayerRequset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginPlayerRequset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginPlayerRequset
         */
        public static fromObject(object: { [k: string]: any }): message.LoginPlayerRequset;

        /**
         * Creates a plain object from a LoginPlayerRequset message. Also converts values to other types if specified.
         * @param message LoginPlayerRequset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.LoginPlayerRequset, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginPlayerRequset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SelectPlayerResponse. */
    interface ISelectPlayerResponse {

        /** SelectPlayerResponse PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** SelectPlayerResponse AccountId */
        AccountId?: (number|Long|null);

        /** SelectPlayerResponse Key */
        Key?: (number|Long|null);

        /** SelectPlayerResponse PlayerData */
        PlayerData?: (message.IPlayerData[]|null);
    }

    /** Represents a SelectPlayerResponse. */
    class SelectPlayerResponse implements ISelectPlayerResponse {

        /**
         * Constructs a new SelectPlayerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.ISelectPlayerResponse);

        /** SelectPlayerResponse PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** SelectPlayerResponse AccountId. */
        public AccountId: (number|Long);

        /** SelectPlayerResponse Key. */
        public Key: (number|Long);

        /** SelectPlayerResponse PlayerData. */
        public PlayerData: message.IPlayerData[];

        /**
         * Creates a new SelectPlayerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SelectPlayerResponse instance
         */
        public static create(properties?: message.ISelectPlayerResponse): message.SelectPlayerResponse;

        /**
         * Encodes the specified SelectPlayerResponse message. Does not implicitly {@link message.SelectPlayerResponse.verify|verify} messages.
         * @param message SelectPlayerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.ISelectPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SelectPlayerResponse message, length delimited. Does not implicitly {@link message.SelectPlayerResponse.verify|verify} messages.
         * @param message SelectPlayerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.ISelectPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SelectPlayerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SelectPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.SelectPlayerResponse;

        /**
         * Decodes a SelectPlayerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SelectPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.SelectPlayerResponse;

        /**
         * Verifies a SelectPlayerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SelectPlayerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SelectPlayerResponse
         */
        public static fromObject(object: { [k: string]: any }): message.SelectPlayerResponse;

        /**
         * Creates a plain object from a SelectPlayerResponse message. Also converts values to other types if specified.
         * @param message SelectPlayerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.SelectPlayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SelectPlayerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChatMessageRequest. */
    interface IChatMessageRequest {

        /** ChatMessageRequest PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** ChatMessageRequest Sender */
        Sender?: (number|Long|null);

        /** ChatMessageRequest Recver */
        Recver?: (number|Long|null);

        /** ChatMessageRequest MessageType */
        MessageType?: (number|null);

        /** ChatMessageRequest Message */
        Message?: (string|null);
    }

    /** Represents a ChatMessageRequest. */
    class ChatMessageRequest implements IChatMessageRequest {

        /**
         * Constructs a new ChatMessageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IChatMessageRequest);

        /** ChatMessageRequest PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** ChatMessageRequest Sender. */
        public Sender: (number|Long);

        /** ChatMessageRequest Recver. */
        public Recver: (number|Long);

        /** ChatMessageRequest MessageType. */
        public MessageType: number;

        /** ChatMessageRequest Message. */
        public Message: string;

        /**
         * Creates a new ChatMessageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMessageRequest instance
         */
        public static create(properties?: message.IChatMessageRequest): message.ChatMessageRequest;

        /**
         * Encodes the specified ChatMessageRequest message. Does not implicitly {@link message.ChatMessageRequest.verify|verify} messages.
         * @param message ChatMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IChatMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMessageRequest message, length delimited. Does not implicitly {@link message.ChatMessageRequest.verify|verify} messages.
         * @param message ChatMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IChatMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.ChatMessageRequest;

        /**
         * Decodes a ChatMessageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.ChatMessageRequest;

        /**
         * Verifies a ChatMessageRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatMessageRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatMessageRequest
         */
        public static fromObject(object: { [k: string]: any }): message.ChatMessageRequest;

        /**
         * Creates a plain object from a ChatMessageRequest message. Also converts values to other types if specified.
         * @param message ChatMessageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.ChatMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatMessageRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChatMessageResponse. */
    interface IChatMessageResponse {

        /** ChatMessageResponse PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** ChatMessageResponse Sender */
        Sender?: (number|Long|null);

        /** ChatMessageResponse SenderName */
        SenderName?: (string|null);

        /** ChatMessageResponse Recver */
        Recver?: (number|Long|null);

        /** ChatMessageResponse RecverName */
        RecverName?: (string|null);

        /** ChatMessageResponse MessageType */
        MessageType?: (number|null);

        /** ChatMessageResponse Message */
        Message?: (string|null);
    }

    /** Represents a ChatMessageResponse. */
    class ChatMessageResponse implements IChatMessageResponse {

        /**
         * Constructs a new ChatMessageResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IChatMessageResponse);

        /** ChatMessageResponse PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** ChatMessageResponse Sender. */
        public Sender: (number|Long);

        /** ChatMessageResponse SenderName. */
        public SenderName: string;

        /** ChatMessageResponse Recver. */
        public Recver: (number|Long);

        /** ChatMessageResponse RecverName. */
        public RecverName: string;

        /** ChatMessageResponse MessageType. */
        public MessageType: number;

        /** ChatMessageResponse Message. */
        public Message: string;

        /**
         * Creates a new ChatMessageResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMessageResponse instance
         */
        public static create(properties?: message.IChatMessageResponse): message.ChatMessageResponse;

        /**
         * Encodes the specified ChatMessageResponse message. Does not implicitly {@link message.ChatMessageResponse.verify|verify} messages.
         * @param message ChatMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IChatMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMessageResponse message, length delimited. Does not implicitly {@link message.ChatMessageResponse.verify|verify} messages.
         * @param message ChatMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IChatMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessageResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.ChatMessageResponse;

        /**
         * Decodes a ChatMessageResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.ChatMessageResponse;

        /**
         * Verifies a ChatMessageResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatMessageResponse
         */
        public static fromObject(object: { [k: string]: any }): message.ChatMessageResponse;

        /**
         * Creates a plain object from a ChatMessageResponse message. Also converts values to other types if specified.
         * @param message ChatMessageResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.ChatMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatMessageResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a W_C_Test. */
    interface IW_C_Test {

        /** W_C_Test Recv */
        Recv?: (number[]|null);
    }

    /** Represents a W_C_Test. */
    class W_C_Test implements IW_C_Test {

        /**
         * Constructs a new W_C_Test.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IW_C_Test);

        /** W_C_Test Recv. */
        public Recv: number[];

        /**
         * Creates a new W_C_Test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns W_C_Test instance
         */
        public static create(properties?: message.IW_C_Test): message.W_C_Test;

        /**
         * Encodes the specified W_C_Test message. Does not implicitly {@link message.W_C_Test.verify|verify} messages.
         * @param message W_C_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IW_C_Test, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified W_C_Test message, length delimited. Does not implicitly {@link message.W_C_Test.verify|verify} messages.
         * @param message W_C_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IW_C_Test, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a W_C_Test message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns W_C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.W_C_Test;

        /**
         * Decodes a W_C_Test message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns W_C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.W_C_Test;

        /**
         * Verifies a W_C_Test message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a W_C_Test message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns W_C_Test
         */
        public static fromObject(object: { [k: string]: any }): message.W_C_Test;

        /**
         * Creates a plain object from a W_C_Test message. Also converts values to other types if specified.
         * @param message W_C_Test
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.W_C_Test, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this W_C_Test to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** SERVICE enum. */
    enum SERVICE {
        NONE = 0,
        CLIENT = 1,
        GATE = 2,
        GM = 3,
        GAME = 4,
        ZONE = 5,
        DB = 6
    }

    /** CHAT enum. */
    enum CHAT {
        MSG_TYPE_WORLD = 0,
        MSG_TYPE_PRIVATE = 1,
        MSG_TYPE_ORG = 2,
        MSG_TYPE_COUNT = 3
    }

    /** Properties of a PlayerData. */
    interface IPlayerData {

        /** PlayerData PlayerID */
        PlayerID?: (number|Long|null);

        /** PlayerData PlayerName */
        PlayerName?: (string|null);

        /** PlayerData PlayerGold */
        PlayerGold?: (number|null);
    }

    /** Represents a PlayerData. */
    class PlayerData implements IPlayerData {

        /**
         * Constructs a new PlayerData.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IPlayerData);

        /** PlayerData PlayerID. */
        public PlayerID: (number|Long);

        /** PlayerData PlayerName. */
        public PlayerName: string;

        /** PlayerData PlayerGold. */
        public PlayerGold: number;

        /**
         * Creates a new PlayerData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerData instance
         */
        public static create(properties?: message.IPlayerData): message.PlayerData;

        /**
         * Encodes the specified PlayerData message. Does not implicitly {@link message.PlayerData.verify|verify} messages.
         * @param message PlayerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IPlayerData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerData message, length delimited. Does not implicitly {@link message.PlayerData.verify|verify} messages.
         * @param message PlayerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IPlayerData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.PlayerData;

        /**
         * Decodes a PlayerData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.PlayerData;

        /**
         * Verifies a PlayerData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerData
         */
        public static fromObject(object: { [k: string]: any }): message.PlayerData;

        /**
         * Creates a plain object from a PlayerData message. Also converts values to other types if specified.
         * @param message PlayerData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.PlayerData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Ipacket. */
    interface IIpacket {

        /** Ipacket Stx */
        Stx?: (number|null);

        /** Ipacket DestServerType */
        DestServerType?: (message.SERVICE|null);

        /** Ipacket Ckx */
        Ckx?: (number|null);

        /** Ipacket Id */
        Id?: (number|Long|null);
    }

    /** Represents an Ipacket. */
    class Ipacket implements IIpacket {

        /**
         * Constructs a new Ipacket.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IIpacket);

        /** Ipacket Stx. */
        public Stx: number;

        /** Ipacket DestServerType. */
        public DestServerType: message.SERVICE;

        /** Ipacket Ckx. */
        public Ckx: number;

        /** Ipacket Id. */
        public Id: (number|Long);

        /**
         * Creates a new Ipacket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ipacket instance
         */
        public static create(properties?: message.IIpacket): message.Ipacket;

        /**
         * Encodes the specified Ipacket message. Does not implicitly {@link message.Ipacket.verify|verify} messages.
         * @param message Ipacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IIpacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ipacket message, length delimited. Does not implicitly {@link message.Ipacket.verify|verify} messages.
         * @param message Ipacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IIpacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Ipacket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ipacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.Ipacket;

        /**
         * Decodes an Ipacket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ipacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.Ipacket;

        /**
         * Verifies an Ipacket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Ipacket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ipacket
         */
        public static fromObject(object: { [k: string]: any }): message.Ipacket;

        /**
         * Creates a plain object from an Ipacket message. Also converts values to other types if specified.
         * @param message Ipacket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.Ipacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ipacket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeardPacket. */
    interface IHeardPacket {
    }

    /** Represents a HeardPacket. */
    class HeardPacket implements IHeardPacket {

        /**
         * Constructs a new HeardPacket.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IHeardPacket);

        /**
         * Creates a new HeardPacket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeardPacket instance
         */
        public static create(properties?: message.IHeardPacket): message.HeardPacket;

        /**
         * Encodes the specified HeardPacket message. Does not implicitly {@link message.HeardPacket.verify|verify} messages.
         * @param message HeardPacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IHeardPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeardPacket message, length delimited. Does not implicitly {@link message.HeardPacket.verify|verify} messages.
         * @param message HeardPacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IHeardPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeardPacket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeardPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.HeardPacket;

        /**
         * Decodes a HeardPacket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeardPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.HeardPacket;

        /**
         * Verifies a HeardPacket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeardPacket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeardPacket
         */
        public static fromObject(object: { [k: string]: any }): message.HeardPacket;

        /**
         * Creates a plain object from a HeardPacket message. Also converts values to other types if specified.
         * @param message HeardPacket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.HeardPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeardPacket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Point3F. */
    interface IPoint3F {

        /** Point3F X */
        X?: (number|null);

        /** Point3F Y */
        Y?: (number|null);

        /** Point3F Z */
        Z?: (number|null);
    }

    /** Represents a Point3F. */
    class Point3F implements IPoint3F {

        /**
         * Constructs a new Point3F.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IPoint3F);

        /** Point3F X. */
        public X: number;

        /** Point3F Y. */
        public Y: number;

        /** Point3F Z. */
        public Z: number;

        /**
         * Creates a new Point3F instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Point3F instance
         */
        public static create(properties?: message.IPoint3F): message.Point3F;

        /**
         * Encodes the specified Point3F message. Does not implicitly {@link message.Point3F.verify|verify} messages.
         * @param message Point3F message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IPoint3F, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Point3F message, length delimited. Does not implicitly {@link message.Point3F.verify|verify} messages.
         * @param message Point3F message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IPoint3F, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Point3F message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Point3F
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.Point3F;

        /**
         * Decodes a Point3F message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Point3F
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.Point3F;

        /**
         * Verifies a Point3F message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Point3F message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point3F
         */
        public static fromObject(object: { [k: string]: any }): message.Point3F;

        /**
         * Creates a plain object from a Point3F message. Also converts values to other types if specified.
         * @param message Point3F
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.Point3F, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point3F to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_Z_Move. */
    interface IC_Z_Move {

        /** C_Z_Move PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** C_Z_Move move */
        move?: (message.C_Z_Move.IMove|null);
    }

    /** Represents a C_Z_Move. */
    class C_Z_Move implements IC_Z_Move {

        /**
         * Constructs a new C_Z_Move.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_Z_Move);

        /** C_Z_Move PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** C_Z_Move move. */
        public move?: (message.C_Z_Move.IMove|null);

        /**
         * Creates a new C_Z_Move instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_Z_Move instance
         */
        public static create(properties?: message.IC_Z_Move): message.C_Z_Move;

        /**
         * Encodes the specified C_Z_Move message. Does not implicitly {@link message.C_Z_Move.verify|verify} messages.
         * @param message C_Z_Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_Z_Move, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_Z_Move message, length delimited. Does not implicitly {@link message.C_Z_Move.verify|verify} messages.
         * @param message C_Z_Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_Z_Move, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_Z_Move message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_Z_Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_Z_Move;

        /**
         * Decodes a C_Z_Move message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_Z_Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_Z_Move;

        /**
         * Verifies a C_Z_Move message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_Z_Move message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_Z_Move
         */
        public static fromObject(object: { [k: string]: any }): message.C_Z_Move;

        /**
         * Creates a plain object from a C_Z_Move message. Also converts values to other types if specified.
         * @param message C_Z_Move
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_Z_Move, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_Z_Move to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace C_Z_Move {

        /** Properties of a Move. */
        interface IMove {

            /** Move Mode */
            Mode?: (number|null);

            /** Move normal */
            normal?: (message.C_Z_Move.Move.INormal|null);
        }

        /** Represents a Move. */
        class Move implements IMove {

            /**
             * Constructs a new Move.
             * @param [properties] Properties to set
             */
            constructor(properties?: message.C_Z_Move.IMove);

            /** Move Mode. */
            public Mode: number;

            /** Move normal. */
            public normal?: (message.C_Z_Move.Move.INormal|null);

            /**
             * Creates a new Move instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Move instance
             */
            public static create(properties?: message.C_Z_Move.IMove): message.C_Z_Move.Move;

            /**
             * Encodes the specified Move message. Does not implicitly {@link message.C_Z_Move.Move.verify|verify} messages.
             * @param message Move message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: message.C_Z_Move.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Move message, length delimited. Does not implicitly {@link message.C_Z_Move.Move.verify|verify} messages.
             * @param message Move message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: message.C_Z_Move.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Move message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_Z_Move.Move;

            /**
             * Decodes a Move message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_Z_Move.Move;

            /**
             * Verifies a Move message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Move message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Move
             */
            public static fromObject(object: { [k: string]: any }): message.C_Z_Move.Move;

            /**
             * Creates a plain object from a Move message. Also converts values to other types if specified.
             * @param message Move
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: message.C_Z_Move.Move, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Move to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Move {

            /** Properties of a Normal. */
            interface INormal {

                /** Normal Pos */
                Pos?: (message.IPoint3F|null);

                /** Normal Yaw */
                Yaw?: (number|null);

                /** Normal Duration */
                Duration?: (number|null);
            }

            /** Represents a Normal. */
            class Normal implements INormal {

                /**
                 * Constructs a new Normal.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: message.C_Z_Move.Move.INormal);

                /** Normal Pos. */
                public Pos?: (message.IPoint3F|null);

                /** Normal Yaw. */
                public Yaw: number;

                /** Normal Duration. */
                public Duration: number;

                /**
                 * Creates a new Normal instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Normal instance
                 */
                public static create(properties?: message.C_Z_Move.Move.INormal): message.C_Z_Move.Move.Normal;

                /**
                 * Encodes the specified Normal message. Does not implicitly {@link message.C_Z_Move.Move.Normal.verify|verify} messages.
                 * @param message Normal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: message.C_Z_Move.Move.INormal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Normal message, length delimited. Does not implicitly {@link message.C_Z_Move.Move.Normal.verify|verify} messages.
                 * @param message Normal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: message.C_Z_Move.Move.INormal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Normal message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Normal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_Z_Move.Move.Normal;

                /**
                 * Decodes a Normal message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Normal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_Z_Move.Move.Normal;

                /**
                 * Verifies a Normal message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Normal message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Normal
                 */
                public static fromObject(object: { [k: string]: any }): message.C_Z_Move.Move.Normal;

                /**
                 * Creates a plain object from a Normal message. Also converts values to other types if specified.
                 * @param message Normal
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: message.C_Z_Move.Move.Normal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Normal to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Properties of a C_Z_Skill. */
    interface IC_Z_Skill {

        /** C_Z_Skill PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** C_Z_Skill SkillId */
        SkillId?: (number|null);

        /** C_Z_Skill TargetId */
        TargetId?: (number|Long|null);
    }

    /** Represents a C_Z_Skill. */
    class C_Z_Skill implements IC_Z_Skill {

        /**
         * Constructs a new C_Z_Skill.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_Z_Skill);

        /** C_Z_Skill PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** C_Z_Skill SkillId. */
        public SkillId: number;

        /** C_Z_Skill TargetId. */
        public TargetId: (number|Long);

        /**
         * Creates a new C_Z_Skill instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_Z_Skill instance
         */
        public static create(properties?: message.IC_Z_Skill): message.C_Z_Skill;

        /**
         * Encodes the specified C_Z_Skill message. Does not implicitly {@link message.C_Z_Skill.verify|verify} messages.
         * @param message C_Z_Skill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_Z_Skill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_Z_Skill message, length delimited. Does not implicitly {@link message.C_Z_Skill.verify|verify} messages.
         * @param message C_Z_Skill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_Z_Skill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_Z_Skill message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_Z_Skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_Z_Skill;

        /**
         * Decodes a C_Z_Skill message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_Z_Skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_Z_Skill;

        /**
         * Verifies a C_Z_Skill message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_Z_Skill message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_Z_Skill
         */
        public static fromObject(object: { [k: string]: any }): message.C_Z_Skill;

        /**
         * Creates a plain object from a C_Z_Skill message. Also converts values to other types if specified.
         * @param message C_Z_Skill
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_Z_Skill, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_Z_Skill to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Z_C_LoginMap. */
    interface IZ_C_LoginMap {

        /** Z_C_LoginMap PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** Z_C_LoginMap Id */
        Id?: (number|Long|null);

        /** Z_C_LoginMap Pos */
        Pos?: (message.IPoint3F|null);

        /** Z_C_LoginMap Rotation */
        Rotation?: (number|null);
    }

    /** Represents a Z_C_LoginMap. */
    class Z_C_LoginMap implements IZ_C_LoginMap {

        /**
         * Constructs a new Z_C_LoginMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IZ_C_LoginMap);

        /** Z_C_LoginMap PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** Z_C_LoginMap Id. */
        public Id: (number|Long);

        /** Z_C_LoginMap Pos. */
        public Pos?: (message.IPoint3F|null);

        /** Z_C_LoginMap Rotation. */
        public Rotation: number;

        /**
         * Creates a new Z_C_LoginMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Z_C_LoginMap instance
         */
        public static create(properties?: message.IZ_C_LoginMap): message.Z_C_LoginMap;

        /**
         * Encodes the specified Z_C_LoginMap message. Does not implicitly {@link message.Z_C_LoginMap.verify|verify} messages.
         * @param message Z_C_LoginMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IZ_C_LoginMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Z_C_LoginMap message, length delimited. Does not implicitly {@link message.Z_C_LoginMap.verify|verify} messages.
         * @param message Z_C_LoginMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IZ_C_LoginMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Z_C_LoginMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Z_C_LoginMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.Z_C_LoginMap;

        /**
         * Decodes a Z_C_LoginMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Z_C_LoginMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.Z_C_LoginMap;

        /**
         * Verifies a Z_C_LoginMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Z_C_LoginMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Z_C_LoginMap
         */
        public static fromObject(object: { [k: string]: any }): message.Z_C_LoginMap;

        /**
         * Creates a plain object from a Z_C_LoginMap message. Also converts values to other types if specified.
         * @param message Z_C_LoginMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.Z_C_LoginMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Z_C_LoginMap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Z_C_ENTITY. */
    interface IZ_C_ENTITY {

        /** Z_C_ENTITY PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** Z_C_ENTITY EntityInfo */
        EntityInfo?: (message.Z_C_ENTITY.IEntity[]|null);
    }

    /** Represents a Z_C_ENTITY. */
    class Z_C_ENTITY implements IZ_C_ENTITY {

        /**
         * Constructs a new Z_C_ENTITY.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IZ_C_ENTITY);

        /** Z_C_ENTITY PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** Z_C_ENTITY EntityInfo. */
        public EntityInfo: message.Z_C_ENTITY.IEntity[];

        /**
         * Creates a new Z_C_ENTITY instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Z_C_ENTITY instance
         */
        public static create(properties?: message.IZ_C_ENTITY): message.Z_C_ENTITY;

        /**
         * Encodes the specified Z_C_ENTITY message. Does not implicitly {@link message.Z_C_ENTITY.verify|verify} messages.
         * @param message Z_C_ENTITY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IZ_C_ENTITY, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Z_C_ENTITY message, length delimited. Does not implicitly {@link message.Z_C_ENTITY.verify|verify} messages.
         * @param message Z_C_ENTITY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IZ_C_ENTITY, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Z_C_ENTITY message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Z_C_ENTITY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.Z_C_ENTITY;

        /**
         * Decodes a Z_C_ENTITY message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Z_C_ENTITY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.Z_C_ENTITY;

        /**
         * Verifies a Z_C_ENTITY message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Z_C_ENTITY message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Z_C_ENTITY
         */
        public static fromObject(object: { [k: string]: any }): message.Z_C_ENTITY;

        /**
         * Creates a plain object from a Z_C_ENTITY message. Also converts values to other types if specified.
         * @param message Z_C_ENTITY
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.Z_C_ENTITY, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Z_C_ENTITY to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Z_C_ENTITY {

        /** Properties of an Entity. */
        interface IEntity {

            /** Entity Id */
            Id?: (number|Long|null);

            /** Entity Data */
            Data?: (message.Z_C_ENTITY.Entity.IDataMask|null);

            /** Entity Move */
            Move?: (message.Z_C_ENTITY.Entity.IMoveMask|null);

            /** Entity Stats */
            Stats?: (message.Z_C_ENTITY.Entity.IStatsMask|null);
        }

        /** Represents an Entity. */
        class Entity implements IEntity {

            /**
             * Constructs a new Entity.
             * @param [properties] Properties to set
             */
            constructor(properties?: message.Z_C_ENTITY.IEntity);

            /** Entity Id. */
            public Id: (number|Long);

            /** Entity Data. */
            public Data?: (message.Z_C_ENTITY.Entity.IDataMask|null);

            /** Entity Move. */
            public Move?: (message.Z_C_ENTITY.Entity.IMoveMask|null);

            /** Entity Stats. */
            public Stats?: (message.Z_C_ENTITY.Entity.IStatsMask|null);

            /**
             * Creates a new Entity instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Entity instance
             */
            public static create(properties?: message.Z_C_ENTITY.IEntity): message.Z_C_ENTITY.Entity;

            /**
             * Encodes the specified Entity message. Does not implicitly {@link message.Z_C_ENTITY.Entity.verify|verify} messages.
             * @param message Entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: message.Z_C_ENTITY.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Entity message, length delimited. Does not implicitly {@link message.Z_C_ENTITY.Entity.verify|verify} messages.
             * @param message Entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: message.Z_C_ENTITY.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Entity message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.Z_C_ENTITY.Entity;

            /**
             * Decodes an Entity message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.Z_C_ENTITY.Entity;

            /**
             * Verifies an Entity message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Entity message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Entity
             */
            public static fromObject(object: { [k: string]: any }): message.Z_C_ENTITY.Entity;

            /**
             * Creates a plain object from an Entity message. Also converts values to other types if specified.
             * @param message Entity
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: message.Z_C_ENTITY.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Entity to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Entity {

            /** Properties of a DataMask. */
            interface IDataMask {

                /** DataMask Type */
                Type?: (number|null);

                /** DataMask RemoveFlag */
                RemoveFlag?: (boolean|null);

                /** DataMask NpcData */
                NpcData?: (message.Z_C_ENTITY.Entity.DataMask.INpcDataMask|null);

                /** DataMask SpellData */
                SpellData?: (message.Z_C_ENTITY.Entity.DataMask.ISpellDataMask|null);
            }

            /** Represents a DataMask. */
            class DataMask implements IDataMask {

                /**
                 * Constructs a new DataMask.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: message.Z_C_ENTITY.Entity.IDataMask);

                /** DataMask Type. */
                public Type: number;

                /** DataMask RemoveFlag. */
                public RemoveFlag: boolean;

                /** DataMask NpcData. */
                public NpcData?: (message.Z_C_ENTITY.Entity.DataMask.INpcDataMask|null);

                /** DataMask SpellData. */
                public SpellData?: (message.Z_C_ENTITY.Entity.DataMask.ISpellDataMask|null);

                /**
                 * Creates a new DataMask instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DataMask instance
                 */
                public static create(properties?: message.Z_C_ENTITY.Entity.IDataMask): message.Z_C_ENTITY.Entity.DataMask;

                /**
                 * Encodes the specified DataMask message. Does not implicitly {@link message.Z_C_ENTITY.Entity.DataMask.verify|verify} messages.
                 * @param message DataMask message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: message.Z_C_ENTITY.Entity.IDataMask, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DataMask message, length delimited. Does not implicitly {@link message.Z_C_ENTITY.Entity.DataMask.verify|verify} messages.
                 * @param message DataMask message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: message.Z_C_ENTITY.Entity.IDataMask, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DataMask message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DataMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.Z_C_ENTITY.Entity.DataMask;

                /**
                 * Decodes a DataMask message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DataMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.Z_C_ENTITY.Entity.DataMask;

                /**
                 * Verifies a DataMask message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DataMask message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DataMask
                 */
                public static fromObject(object: { [k: string]: any }): message.Z_C_ENTITY.Entity.DataMask;

                /**
                 * Creates a plain object from a DataMask message. Also converts values to other types if specified.
                 * @param message DataMask
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: message.Z_C_ENTITY.Entity.DataMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DataMask to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace DataMask {

                /** Properties of a NpcDataMask. */
                interface INpcDataMask {

                    /** NpcDataMask DataId */
                    DataId?: (number|null);
                }

                /** Represents a NpcDataMask. */
                class NpcDataMask implements INpcDataMask {

                    /**
                     * Constructs a new NpcDataMask.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: message.Z_C_ENTITY.Entity.DataMask.INpcDataMask);

                    /** NpcDataMask DataId. */
                    public DataId: number;

                    /**
                     * Creates a new NpcDataMask instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NpcDataMask instance
                     */
                    public static create(properties?: message.Z_C_ENTITY.Entity.DataMask.INpcDataMask): message.Z_C_ENTITY.Entity.DataMask.NpcDataMask;

                    /**
                     * Encodes the specified NpcDataMask message. Does not implicitly {@link message.Z_C_ENTITY.Entity.DataMask.NpcDataMask.verify|verify} messages.
                     * @param message NpcDataMask message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: message.Z_C_ENTITY.Entity.DataMask.INpcDataMask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NpcDataMask message, length delimited. Does not implicitly {@link message.Z_C_ENTITY.Entity.DataMask.NpcDataMask.verify|verify} messages.
                     * @param message NpcDataMask message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: message.Z_C_ENTITY.Entity.DataMask.INpcDataMask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NpcDataMask message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NpcDataMask
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.Z_C_ENTITY.Entity.DataMask.NpcDataMask;

                    /**
                     * Decodes a NpcDataMask message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NpcDataMask
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.Z_C_ENTITY.Entity.DataMask.NpcDataMask;

                    /**
                     * Verifies a NpcDataMask message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NpcDataMask message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NpcDataMask
                     */
                    public static fromObject(object: { [k: string]: any }): message.Z_C_ENTITY.Entity.DataMask.NpcDataMask;

                    /**
                     * Creates a plain object from a NpcDataMask message. Also converts values to other types if specified.
                     * @param message NpcDataMask
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: message.Z_C_ENTITY.Entity.DataMask.NpcDataMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NpcDataMask to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SpellDataMask. */
                interface ISpellDataMask {

                    /** SpellDataMask DataId */
                    DataId?: (number|null);

                    /** SpellDataMask LifeTime */
                    LifeTime?: (number|null);

                    /** SpellDataMask FlySpeed */
                    FlySpeed?: (number|null);
                }

                /** Represents a SpellDataMask. */
                class SpellDataMask implements ISpellDataMask {

                    /**
                     * Constructs a new SpellDataMask.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: message.Z_C_ENTITY.Entity.DataMask.ISpellDataMask);

                    /** SpellDataMask DataId. */
                    public DataId: number;

                    /** SpellDataMask LifeTime. */
                    public LifeTime: number;

                    /** SpellDataMask FlySpeed. */
                    public FlySpeed: number;

                    /**
                     * Creates a new SpellDataMask instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpellDataMask instance
                     */
                    public static create(properties?: message.Z_C_ENTITY.Entity.DataMask.ISpellDataMask): message.Z_C_ENTITY.Entity.DataMask.SpellDataMask;

                    /**
                     * Encodes the specified SpellDataMask message. Does not implicitly {@link message.Z_C_ENTITY.Entity.DataMask.SpellDataMask.verify|verify} messages.
                     * @param message SpellDataMask message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: message.Z_C_ENTITY.Entity.DataMask.ISpellDataMask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpellDataMask message, length delimited. Does not implicitly {@link message.Z_C_ENTITY.Entity.DataMask.SpellDataMask.verify|verify} messages.
                     * @param message SpellDataMask message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: message.Z_C_ENTITY.Entity.DataMask.ISpellDataMask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpellDataMask message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpellDataMask
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.Z_C_ENTITY.Entity.DataMask.SpellDataMask;

                    /**
                     * Decodes a SpellDataMask message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpellDataMask
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.Z_C_ENTITY.Entity.DataMask.SpellDataMask;

                    /**
                     * Verifies a SpellDataMask message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpellDataMask message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpellDataMask
                     */
                    public static fromObject(object: { [k: string]: any }): message.Z_C_ENTITY.Entity.DataMask.SpellDataMask;

                    /**
                     * Creates a plain object from a SpellDataMask message. Also converts values to other types if specified.
                     * @param message SpellDataMask
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: message.Z_C_ENTITY.Entity.DataMask.SpellDataMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpellDataMask to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a MoveMask. */
            interface IMoveMask {

                /** MoveMask Pos */
                Pos?: (message.IPoint3F|null);

                /** MoveMask Rotation */
                Rotation?: (number|null);

                /** MoveMask ForceUpdateFlag */
                ForceUpdateFlag?: (boolean|null);
            }

            /** Represents a MoveMask. */
            class MoveMask implements IMoveMask {

                /**
                 * Constructs a new MoveMask.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: message.Z_C_ENTITY.Entity.IMoveMask);

                /** MoveMask Pos. */
                public Pos?: (message.IPoint3F|null);

                /** MoveMask Rotation. */
                public Rotation: number;

                /** MoveMask ForceUpdateFlag. */
                public ForceUpdateFlag: boolean;

                /**
                 * Creates a new MoveMask instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MoveMask instance
                 */
                public static create(properties?: message.Z_C_ENTITY.Entity.IMoveMask): message.Z_C_ENTITY.Entity.MoveMask;

                /**
                 * Encodes the specified MoveMask message. Does not implicitly {@link message.Z_C_ENTITY.Entity.MoveMask.verify|verify} messages.
                 * @param message MoveMask message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: message.Z_C_ENTITY.Entity.IMoveMask, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MoveMask message, length delimited. Does not implicitly {@link message.Z_C_ENTITY.Entity.MoveMask.verify|verify} messages.
                 * @param message MoveMask message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: message.Z_C_ENTITY.Entity.IMoveMask, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MoveMask message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MoveMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.Z_C_ENTITY.Entity.MoveMask;

                /**
                 * Decodes a MoveMask message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MoveMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.Z_C_ENTITY.Entity.MoveMask;

                /**
                 * Verifies a MoveMask message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MoveMask message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MoveMask
                 */
                public static fromObject(object: { [k: string]: any }): message.Z_C_ENTITY.Entity.MoveMask;

                /**
                 * Creates a plain object from a MoveMask message. Also converts values to other types if specified.
                 * @param message MoveMask
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: message.Z_C_ENTITY.Entity.MoveMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MoveMask to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StatsMask. */
            interface IStatsMask {

                /** StatsMask HP */
                HP?: (number|null);

                /** StatsMask MP */
                MP?: (number|null);

                /** StatsMask MaxHP */
                MaxHP?: (number|null);

                /** StatsMask MaxMP */
                MaxMP?: (number|null);

                /** StatsMask PhyDamage */
                PhyDamage?: (number|null);

                /** StatsMask PhyDefence */
                PhyDefence?: (number|null);

                /** StatsMask SplDamage */
                SplDamage?: (number|null);

                /** StatsMask SplDefence */
                SplDefence?: (number|null);

                /** StatsMask Heal */
                Heal?: (number|null);

                /** StatsMask CriticalTimes */
                CriticalTimes?: (number|null);

                /** StatsMask Critical */
                Critical?: (number|null);

                /** StatsMask AntiCriticalTimes */
                AntiCriticalTimes?: (number|null);

                /** StatsMask AntiCritical */
                AntiCritical?: (number|null);

                /** StatsMask Dodge */
                Dodge?: (number|null);

                /** StatsMask Hit */
                Hit?: (number|null);
            }

            /** Represents a StatsMask. */
            class StatsMask implements IStatsMask {

                /**
                 * Constructs a new StatsMask.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: message.Z_C_ENTITY.Entity.IStatsMask);

                /** StatsMask HP. */
                public HP: number;

                /** StatsMask MP. */
                public MP: number;

                /** StatsMask MaxHP. */
                public MaxHP: number;

                /** StatsMask MaxMP. */
                public MaxMP: number;

                /** StatsMask PhyDamage. */
                public PhyDamage: number;

                /** StatsMask PhyDefence. */
                public PhyDefence: number;

                /** StatsMask SplDamage. */
                public SplDamage: number;

                /** StatsMask SplDefence. */
                public SplDefence: number;

                /** StatsMask Heal. */
                public Heal: number;

                /** StatsMask CriticalTimes. */
                public CriticalTimes: number;

                /** StatsMask Critical. */
                public Critical: number;

                /** StatsMask AntiCriticalTimes. */
                public AntiCriticalTimes: number;

                /** StatsMask AntiCritical. */
                public AntiCritical: number;

                /** StatsMask Dodge. */
                public Dodge: number;

                /** StatsMask Hit. */
                public Hit: number;

                /**
                 * Creates a new StatsMask instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StatsMask instance
                 */
                public static create(properties?: message.Z_C_ENTITY.Entity.IStatsMask): message.Z_C_ENTITY.Entity.StatsMask;

                /**
                 * Encodes the specified StatsMask message. Does not implicitly {@link message.Z_C_ENTITY.Entity.StatsMask.verify|verify} messages.
                 * @param message StatsMask message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: message.Z_C_ENTITY.Entity.IStatsMask, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StatsMask message, length delimited. Does not implicitly {@link message.Z_C_ENTITY.Entity.StatsMask.verify|verify} messages.
                 * @param message StatsMask message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: message.Z_C_ENTITY.Entity.IStatsMask, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StatsMask message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StatsMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.Z_C_ENTITY.Entity.StatsMask;

                /**
                 * Decodes a StatsMask message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StatsMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.Z_C_ENTITY.Entity.StatsMask;

                /**
                 * Verifies a StatsMask message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StatsMask message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StatsMask
                 */
                public static fromObject(object: { [k: string]: any }): message.Z_C_ENTITY.Entity.StatsMask;

                /**
                 * Creates a plain object from a StatsMask message. Also converts values to other types if specified.
                 * @param message StatsMask
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: message.Z_C_ENTITY.Entity.StatsMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StatsMask to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Properties of a C_Z_LoginCopyMap. */
    interface IC_Z_LoginCopyMap {

        /** C_Z_LoginCopyMap PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** C_Z_LoginCopyMap DataId */
        DataId?: (number|null);
    }

    /** Represents a C_Z_LoginCopyMap. */
    class C_Z_LoginCopyMap implements IC_Z_LoginCopyMap {

        /**
         * Constructs a new C_Z_LoginCopyMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_Z_LoginCopyMap);

        /** C_Z_LoginCopyMap PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** C_Z_LoginCopyMap DataId. */
        public DataId: number;

        /**
         * Creates a new C_Z_LoginCopyMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_Z_LoginCopyMap instance
         */
        public static create(properties?: message.IC_Z_LoginCopyMap): message.C_Z_LoginCopyMap;

        /**
         * Encodes the specified C_Z_LoginCopyMap message. Does not implicitly {@link message.C_Z_LoginCopyMap.verify|verify} messages.
         * @param message C_Z_LoginCopyMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_Z_LoginCopyMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_Z_LoginCopyMap message, length delimited. Does not implicitly {@link message.C_Z_LoginCopyMap.verify|verify} messages.
         * @param message C_Z_LoginCopyMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_Z_LoginCopyMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_Z_LoginCopyMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_Z_LoginCopyMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_Z_LoginCopyMap;

        /**
         * Decodes a C_Z_LoginCopyMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_Z_LoginCopyMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_Z_LoginCopyMap;

        /**
         * Verifies a C_Z_LoginCopyMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_Z_LoginCopyMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_Z_LoginCopyMap
         */
        public static fromObject(object: { [k: string]: any }): message.C_Z_LoginCopyMap;

        /**
         * Creates a plain object from a C_Z_LoginCopyMap message. Also converts values to other types if specified.
         * @param message C_Z_LoginCopyMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_Z_LoginCopyMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_Z_LoginCopyMap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

  }
  export default proto;
  
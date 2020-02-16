module Factory
  class BlockActions
    BUTTON_ACTION_ID = 'show_score_modal'
    VOTE_ACTION_ID = 'vote'
    
    include Concern::HasPayloadParsing

    def initialize(params)
      @params = params
    end

    def build
      case block_action_id
      when BUTTON_ACTION_ID
        ::Action::ShowSaveScoreModal.new(@params)
      when VOTE_ACTION_ID
        ::Action::Vote.new(@params)
      else
        raise 'Unsupported block actions id'
      end
    end
  end
end
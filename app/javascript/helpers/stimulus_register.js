import { Application } from "@hotwired/stimulus"
import { definitions } from 'stimulus:../controllers'

const application = Application.start()
application.load(definitions)

// Configure Stimulus development experience
application.debug = false
window.Stimulus = application
